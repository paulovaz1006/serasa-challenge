import { Repository } from "typeorm";
import { AppDataSource } from "../db/data-source";
import { CulturesEntity } from "../entity/Cutlures.entity";
import { ICultureRepository } from "../interfaces/ICulture.interfaces";

export class CulturesRepository implements ICultureRepository {
  private repository: Repository<CulturesEntity> = AppDataSource.getRepository(CulturesEntity);

  async findByFarmId(id) {
    return this.repository.find({
      where: {
        id,
      }
    })
  }

  async save(payload) {
    return this.repository.save(payload)
  }

  async update(farm_id, payload) {
    const searchProducer = this.findByFarmId(farm_id);

    const info = {
      ...searchProducer[0],
      ...payload,
      farm_id
    }
    return await this.save(info)
  }
}
