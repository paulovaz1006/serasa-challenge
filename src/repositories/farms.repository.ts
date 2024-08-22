import { Repository } from "typeorm";import { AppDataSource } from "../db/data-source";
import { FarmsEntity } from "../entity/Farms.entity";
import { IFarmRepository } from "../interfaces/IFarm.interfaces";

export class FarmsRepository implements IFarmRepository {
  private repository: Repository<FarmsEntity> = AppDataSource.getRepository(FarmsEntity);

  async findByProducerId(id) {
    return await this.repository.find({
      where: {
        producer_id: {
          id: id,
        },
      },
    });
  }

  async save(payload) {
    return this.repository.save(payload)
  }

  async update(producer_id, payload) {
    const searchProducer = await this.findByProducerId(producer_id);
 
    const info = {
      ...searchProducer[0],
      ...payload,
      producer_id
    }
    return await this.save(info)
  }
}
