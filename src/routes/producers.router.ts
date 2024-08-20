import { Router } from "express";
import { ProducersController } from "../modules/producers/producers.controller";

const producersRoutes = Router();
const producersController = new ProducersController();

producersRoutes.post('/', producersController.post);
producersRoutes.delete('/:id', producersController.delete);
producersRoutes.patch('/:id', producersController.patch);

export default producersRoutes;