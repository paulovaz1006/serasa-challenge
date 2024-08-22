import { Request, Response } from "express";
import { TotalUserCase } from "../useCases/total.userCase"
import { TotalsRepository } from "../repositories/totals.repository";
import { ITotalsController } from "../interfaces/totals/ITotalsController.interface";
import { TTotals } from "../types/TTotals.type";

export class TotalsController implements ITotalsController {
  private totalUserCase: TotalUserCase = new TotalUserCase(new TotalsRepository());

  constructor() {
    this.get = this.get.bind(this)
  }

  async get(req: Request, res: Response): Promise<Response> {
    try {
      const result: TTotals[] = await this.totalUserCase.get();
      return res.status(200).json(result)
    } catch(err) {
      return res.status(400).json(err)
    }
  }
}