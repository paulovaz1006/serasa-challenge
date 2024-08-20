import { Repository } from "typeorm";
import { IUserRepository } from "../modules/producers/interfaces/Iuser.interfaces";
import { AppDataSource } from "../db/data-source";
import { FarmsEntity } from "../entity/Farms.entity";

export class FarmsRepository implements IUserRepository {
  private repository: Repository<FarmsEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(FarmsEntity)
  }

  async save(payload) {
    console.log(payload)
    return 'ok' //this.repository.save(payload)
  }

  async update(id, payload) {
    return 'ok'
  }

  async delete(id, payload) {
    return 'ok'
  }
}