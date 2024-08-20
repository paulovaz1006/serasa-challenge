import { Router } from 'express';
import userRoutes from './producers.router';

const routes = Router();

routes.use('/producers', userRoutes)

export default routes;