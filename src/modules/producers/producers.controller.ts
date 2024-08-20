import { Request, Response } from "express";
import { ProducersRepository } from "../../repositories/producers.repository";
import { ProducersUseCase } from "./producers.useCase";
import { TProducer, UserDTOUpdate } from "./types/TProducer.type";

export class ProducersController {
  private producersUseCase: ProducersUseCase;

  constructor() {
    this.producersUseCase = new ProducersUseCase(new ProducersRepository())
    this.post = this.post.bind(this);
    this.patch = this.patch.bind(this);
    this.delete = this.delete.bind(this);
  }

  async post(req: Request, res: Response) {
    try {
      const payload: TProducer = req.body;
      const result = await this.producersUseCase.post(payload)
      console.log(result)

      if (result['error']) {
        return res.status(400).json(result['message'])
      }

      res.status(201).json(result)
    } catch(err) {
      console.log('err', err)
      res.status(400).json(err)
    }
  }

  async patch(req: Request, res: Response) {
    try {
      const payload: UserDTOUpdate = req.body;
      const id = req.params.id;
      this.producersUseCase.patch(id, payload)
    } catch(err) {
      res.status(400).json(err)
    }
  }

  async delete(req: Request, res: Response) {
    try {

    } catch(err) {
      res.status(400).json(err)
    }
  }
}