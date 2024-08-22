import { Router } from "express";
import { ProducersController } from "../controllers/producers.controller";

const producersRoutes = Router();
const producersController = new ProducersController();

/**
 * @swagger
 * /producers:
 *   post: 
 *     summary: Cria um novo produtor e suas fazendas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example: 
 *             cpf: 46662795801
 *             cnpj: 46662795801111
 *             producer_name: "test 3"
 *             farm_name: "teste farm_name"
 *             city: "city"
 *             state: "state"
 *             area_total_hectares: 10
 *             area_agricultura_hectares: 5
 *             area_vegetacao_hectares: 5
 *             culture: "soja"
 *     responses:
 *       200:
 *         description: Uma lista de produtores e suas fazendas.
 *         content:
 *           application/json:
 *             example:
 *               "created"
 *       400:
 *         description: Erro na requisição.
 * /producers/{id}:
 *   patch:
 *     summary: Atualiza um produtor e suas fazendas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produtor a ser atualizado
 *         schema:
 *           type: string
 *           example: "110e4357-7d4d-4b1f-a416-ac19af60e65e"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example: 
 *             cpf: 46662795801
 *             cnpj: 46662795801111
 *             producer_name: "test 3"
 *             farm_name: "teste farm_name"
 *             city: "city"
 *             state: "state"
 *             area_total_hectares: 10
 *             area_agricultura_hectares: 5
 *             area_vegetacao_hectares: 5
 *             culture: "soja"
 *     responses:
 *       200:
 *         description: Produtor atualizado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               message: "Producer updated"
 *       400:
 *         description: Erro na requisição.
 *   delete:
 *     summary: Exclui um produtor e suas fazendas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produtor a ser excluído
 *         schema:
 *           type: string
 *           example: "110e4357-7d4d-4b1f-a416-ac19af60e65e"
 *     responses:
 *       200:
 *         description: Produtor excluído com sucesso.
 *         content:
 *           application/json:
 *             example:
 *              producer_id: id,
 *              message: "Producer deleted"
 *       400:
 *         description: Erro na requisição.
 */
producersRoutes.post('/', producersController.post);
producersRoutes.delete('/:id', producersController.delete);
producersRoutes.patch('/:id', producersController.patch);

export default producersRoutes;