import { Router } from "express";
import { TotalsController } from "../controllers/total.controller";

const totalsRoutes = Router();
const totalsController = new TotalsController();

/**
 * @swagger
 * /totals:
 *   get:
 *     title: teste
 *     summary: Retorna a lista de produtores e fazendas
 *     responses:
 *       200:
 *         description: Uma lista de produtores e suas fazendas.
 *         content:
 *           application/json:
 *             example:
 *               - producer_id: "110e4357-7d4d-4b1f-a416-ac19af60e65e"
 *                 producer_name: "test 3"
 *                 farm_id: "d5bf6ada-06ba-4e03-9878-1602bff2df6b"
 *                 farm_name: "teste farm_name"
 *                 area_total_hectares: "10.00"
 *                 area_vegetation_hectares: "5.00"
 *                 area_agriculture_hectares: "5.00"
 *       400:
 *         content:
 *           application/json:
 *             example:
 *               error: "Erro requisição"
 */
totalsRoutes.get('/', totalsController.get);

export default totalsRoutes;