import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { FarmsEntity } from "./Farms.entity"
import { randomUUID } from "crypto";

@Entity({name: 'producers'})
export class ProducersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('bigint')
    cpf: string;

    @Column('bigint')
    cnpj: string;

    @OneToMany(() => FarmsEntity, (farm) => farm.producer_id)
    farm_id: FarmsEntity;

    constructor(name, cpf = null, cnpj = null) {
        this.name = name;
        this.cpf = cpf;
        this.cnpj = cnpj;
        this.id = randomUUID()
    }
}
