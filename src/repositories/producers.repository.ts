import { Repository } from "typeorm";
import { ProducersEntity } from "../entity/Producers.entity";
import { IProducerRepository } from "../interfaces/IProducer.interfaces";
import { AppDataSource } from "../db/data-source";

export class ProducersRepository implements IProducerRepository {
  private repository: Repository<ProducersEntity> = AppDataSource.getRepository(ProducersEntity);

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
      ...searchProducer[0],
      ...payload
    }

    return await this.save(info)
  }

  async delete(id) {
    return await this.repository.delete(id)
  }
}
