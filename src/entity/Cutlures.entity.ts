import { Entity, PrimaryGeneratedColumn, ManyToMany, Column } from 'typeorm';
import { FarmsEntity } from './Farms.entity';

@Entity({name: 'cultures'})
export class CulturesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => FarmsEntity, (farm) => farm.cultures_ids)
  farm_ids: FarmsEntity[];

  constructor(name, farm_id) {
    this.id = randomUUID();
    this.name = name;
    this.farm_id = farm_id
  }
}
