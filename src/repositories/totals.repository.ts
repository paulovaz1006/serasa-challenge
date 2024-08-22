import { Repository } from "typeorm";
import { AppDataSource } from "../db/data-source";
import { FarmsEntity } from "../entity/Farms.entity";
import { TTotals } from "../types/TTotals.type";
import { ITotalsRepository } from "../interfaces/totals/ITotalsController.interface";

export class TotalsRepository implements ITotalsRepository {
  private repository: Repository<FarmsEntity> = AppDataSource.getRepository(FarmsEntity);

  async list(): Promise<TTotals[]> {
    const result = await this.repository
        .createQueryBuilder('f')
        .innerJoinAndSelect('f.producer_id', 'p')
        .select([
            'p.id AS producer_id',
            'p.name AS producer_name',            
            'f.id AS farm_id',
            'f.name AS farm_name',
            'f.area_total_hectares AS area_total_hectares',
            'f.area_vegetation_hectares AS area_vegetation_hectares',
            'f.area_agriculture_hectares AS area_agriculture_hectares'
        ])
        .getRawMany();

    return result;
  }
}
