import { Entity, PrimaryGeneratedColumn, Column, Double, ManyToOne, ManyToMany } from "typeorm"
import { ProducersEntity } from "./Producers.entity"
import { CulturesEntity } from "./Cutlures.entity"
import { randomUUID } from "crypto";

@Entity({name: 'farms'})
export class FarmsEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    city: string

    @Column('decimal', { precision: 10, scale: 2 })
    area_total_hectares: number

    @Column('decimal', { precision: 10, scale: 2 })
    area_agriculture_hectares: number

    @Column('decimal', { precision: 10, scale: 2 })
    area_vegetation_hectares: number

    @ManyToOne(() => ProducersEntity, (producer) => producer.farm_id)
    producer_id: ProducersEntity 

    @ManyToMany(() => CulturesEntity, (culture) => culture.farm_ids)
    cultures_ids: CulturesEntity[]; 

    constructor(name, city, area_total_hectares, area_agriculture_hectares, area_vegetation_hectares, producer_id) {
        this.id = randomUUID();
        this.name = name; 
        this.city = city;
        this.area_total_hectares = area_total_hectares; 
        this.area_vegetation_hectares = area_vegetation_hectares; 
        this.area_agriculture_hectares = area_agriculture_hectares, 
        this.producer_id = producer_id;
        
    }
}
