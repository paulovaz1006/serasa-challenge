import { CulturesEntity } from "../../entity/Cutlures.entity";
import { FarmsEntity } from "../../entity/Farms.entity";
import { ProducersEntity } from "../../entity/Producers.entity";
import { FarmDTO } from "./dto/farm.dto";
import { ProducersDTO } from "./dto/producers.dto";
import { IUserCase, IUserRepository } from "./interfaces/Iuser.interfaces";
import { TProducer } from "./types/TProducer.type";

export class ProducersUseCase implements IUserCase {
  constructor(private producerRepository: IUserRepository) {}

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
    const farmEntity = new FarmsEntity();
    const culturesEntity = new CulturesEntity();

    // const saveProducer = await this.producerRepository.save(payload);
    // const saveFarm = await this.producerRepository.save(payload);
    // const saveCultures = await this.producerRepository.save(payload);


  }

  async patch(id, payload) {

    return 'oik'
  }

  async delete(id, payload) {}
}