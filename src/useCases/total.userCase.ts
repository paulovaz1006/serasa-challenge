import { ITotalsUseCase } from "../interfaces/totals/ITotalsController.interface";
import { TotalsRepository } from "../repositories/totals.repository";
import { TTotals } from "../types/TTotals.type";

export class TotalUserCase implements ITotalsUseCase {
  constructor(private totalRepository: TotalsRepository) {}

  async get(): Promise<TTotals[]> {
    return this.totalRepository.list()
  }
}