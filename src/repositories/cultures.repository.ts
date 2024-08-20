import { Repository } from "typeorm";
import { IUserRepository } from "../modules/producers/interfaces/Iuser.interfaces";
import { AppDataSource } from "../db/data-source";
import { CulturesEntity } from "../entity/Cutlures.entity";

export class CulturesRepository implements IUserRepository {
  private repository: Repository<CulturesEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(CulturesEntity)
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