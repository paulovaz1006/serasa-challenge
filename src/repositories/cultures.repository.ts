import { Repository } from "typeorm";
import { IUserRepository } from "../modules/producers/interfaces/Iuser.interfaces";
import { AppDataSource } from "../db/data-source";
import { CulturesEntity } from "../entity/Cutlures.entity";

export class CulturesRepository implements ICultureRepository {
  private repository: Repository<CulturesEntity> = AppDataSource.getRepository(CulturesEntity);

  private async findById(id) {
    return this.repository.find({
      where: {
        id,
      }
    })
  }

  async save(payload) {
    return this.repository.save(payload)
  }

  async update(id, payload) {
    const searchProducer = await this.findById(id);
    const info = {
      ...searchProducer,
      ...payload
    }
    return await this.save(info)
  }
}
