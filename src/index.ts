import { AppDataSource } from "./db/data-source"
import express from 'express';
import routes from './routes';

AppDataSource.initialize().then(async () => {
    const app = express()

    app.use(express.json());
    app.use(routes)
    app.listen(3000, () => {
        console.log("run server")
    })

}).catch(error => console.log(error))
