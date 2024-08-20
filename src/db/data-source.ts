import "reflect-metadata"
import { DataSource } from "typeorm"
import { ProducersEntity } from "../entity/Producers.entity"
import { CulturesEntity } from "../entity/Cutlures.entity"
import { FarmsEntity } from "../entity/Farms.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Pa100696#@",
    database: "serasa-challenge",
    // synchronize: true,
    logging: false,
    entities: [FarmsEntity, ProducersEntity, CulturesEntity],
    migrations: [],
    subscribers: [],
})
