import { Repository } from "typeorm";
import { IUserRepository } from "../modules/producers/interfaces/Iuser.interfaces";
import { AppDataSource } from "../db/data-source";
import { FarmsEntity } from "../entity/Farms.entity";

export class FarmsRepository implements IUserRepository {
  private repository: Repository<FarmsEntity> = AppDataSource.getRepository(FarmsEntity);

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


  async delete(id, payload) {
    return 'ok'
  }
}
