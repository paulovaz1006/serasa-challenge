import { Repository } from "typeorm";
import { ProducersEntity } from "../entity/Producers.entity";
import { IUserRepository } from "../modules/producers/interfaces/Iuser.interfaces";
import { AppDataSource } from "../db/data-source";

export class ProducersRepository implements IUserRepository {
  private repository: Repository<ProducersEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(ProducersEntity)
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