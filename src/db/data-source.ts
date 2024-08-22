import "reflect-metadata"
import { DataSource } from "typeorm"
import { ProducersEntity } from "../entity/Producers.entity"
import { CulturesEntity } from "../entity/Cutlures.entity"
import { FarmsEntity } from "../entity/Farms.entity"
import { config } from 'dotenv';
config()

export const AppDataSource = new DataSource({
    type: "postgres",
    logging: false,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ["./src/entity/*.ts"],    
    synchronize: true,
    migrations: [],
    subscribers: [],
})


