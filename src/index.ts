import { AppDataSource } from "./db/data-source"
import express from 'express';
import routes from './routes';
import { setupSwagger } from "./config/swagger";
import dotenv, { config } from "dotenv";
import cors from 'cors';

AppDataSource.initialize().then(async () => {
    const app = express()
    app.use(express.json());
    config()
    app.use(cors())
    app.use(routes)
    setupSwagger(app);
    app.listen(3000, () => {
        console.log("run server")
    })

}).catch(error => console.log(error))
