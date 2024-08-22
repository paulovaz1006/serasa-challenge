import { Request, Response } from "express";
import { ProducersRepository } from "../repositories/producers.repository";
import { ProducersUseCase } from "../useCases/producers.useCase";
import { TProducer, UserDTOUpdate } from "../types/TProducer.type";
import { FarmsRepository } from "../repositories/farms.repository";
import { CulturesRepository } from "../repositories/cultures.repository";
import { isDecimal } from "class-validator";

export class ProducersController {
  private producersUseCase: ProducersUseCase;

  constructor() {
    this.producersUseCase = new ProducersUseCase(
      new ProducersRepository(), 
      new FarmsRepository(), 
      new CulturesRepository()
    )
    this.post = this.post.bind(this);
    this.patch = this.patch.bind(this);
    this.delete = this.delete.bind(this);
  }

  async post(req: Request, res: Response) {
    try {
      const payload: TProducer = req.body;
      const result = await this.producersUseCase.post(payload)

      if (result['error']) {
        return res.status(400).json(result['message'])
      }

      res.status(201).json(result)
    } catch(err) {
      res.status(400).json(err)
    }
  }

  async patch(req: Request, res: Response) {
    try {
      const payload: UserDTOUpdate = req.body;
      const {id}  = req.params;
      const result = await this.producersUseCase.patch(id, payload)
      console.log(result, result['driverError'])
      res.status(201).json(result)
    } catch(err) {
      console.log(err)
      res.status(400).json({message: "Not possible updated producer"})
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await this.producersUseCase.delete(id)
      res.status(201).json({
        producer_id: id,
        message: "Producer deleted"
      })
    } catch(err) {
      res.status(400).json(err)
    }
  }
}