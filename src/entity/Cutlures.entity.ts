import { Entity, PrimaryGeneratedColumn, ManyToMany, Column, ManyToOne, JoinColumn } from 'typeorm';
import { FarmsEntity } from './Farms.entity';
import { randomUUID } from "crypto";

@Entity({name: 'cultures'})
export class CulturesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => FarmsEntity, (farm) => farm.culture_id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm_id: FarmsEntity;

  constructor(name, farm_id) {
    this.id = randomUUID();
    this.name = name;
    this.farm_id = farm_id
  }
}
