import { CulturesEntity } from "../entity/Cutlures.entity";
import { FarmsEntity } from "../entity/Farms.entity";
import { ProducersEntity } from "../entity/Producers.entity";
import { FarmDTO } from "../dto/farm.dto";
import { ProducersDTO } from "../dto/producers.dto";
import { IProducerCase, IProducerRepository } from "../interfaces/IProducer.interfaces"
import { TProducer } from "../types/TProducer.type";
import { IFarmRepository } from "../interfaces/IFarm.interfaces";
import { ICultureRepository } from "../interfaces/ICulture.interfaces";

export class ProducersUseCase implements IProducerCase {
  constructor(
    private producerRepository: IProducerRepository, 
    private farmsRepository: IFarmRepository,
    private culturesRepository: ICultureRepository
  ) {}

  async post(payload) {
    const { 
      producer_name,
      cpf,
      cnpj,   
      farm_name,
      city,
      state,
      area_total_hectares,
      area_agricultura_hectares,
      area_vegetacao_hectares,
      culture
    }: TProducer = payload;
    const producerDTO = new ProducersDTO(producer_name, cpf, cnpj)
    const validProducer = await producerDTO.isValid();
    if (validProducer.error) return validProducer;

    const farmDTO = new FarmDTO(farm_name, city, state, area_total_hectares, area_agricultura_hectares, area_vegetacao_hectares)
    const validFarm = await farmDTO.isValid();
    if (validFarm.error) return validFarm;

    const producersEntity = new ProducersEntity( producer_name, cpf, cnpj);

    return await this.producerRepository.save(producersEntity)
    .then((result) => {
       const farmEntity = new FarmsEntity(farm_name, city, state, 
        area_total_hectares, area_agricultura_hectares, area_vegetacao_hectares, 
        result.id);

      return this.farmsRepository.save(farmEntity)
    })
    .then((result) => {
      const culturesEntity = new CulturesEntity(culture,
      result.id);

      this.culturesRepository.save(culturesEntity);

      return 'created';
    })
    .catch(err => err)
  }

  async patch(id, payload) {
    const infoProducer = {
      ...payload,
      name: payload.producer_name
    }

    const infoFarm = {
      ...payload,
      name: payload.farm_name
    }
    
    try {
      const result1 = await this.producerRepository.update(id, infoProducer)
      const result2 = await this.farmsRepository.update(result1.id, infoFarm);
      await this.culturesRepository.update(result2.id, infoFarm);
    } catch(err) {
      return err
    }
    
    return {
      id,
      name:payload.producer_name,
      message: 'Producer updated'
    };
  }

  async delete(id) {
    return await this.producerRepository.delete(id);
  }
}
