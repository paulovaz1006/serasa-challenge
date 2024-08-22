import { Router } from 'express';
import userRoutes from './producers.router';
import totalsRoutes from './totals.router';

const routes = Router();

routes.use('/producers', userRoutes)
routes.use('/totals', totalsRoutes)

export default routes;