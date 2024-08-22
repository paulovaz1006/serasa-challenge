import { Request, Response } from "express"
import { TTotals } from "../../types/TTotals.type"

interface ITotalsController {
  get(req: Request, res: Response): Promise<Response>
}

interface ITotalsUseCase {
  get(): Promise<TTotals[]>
}

interface ITotalsRepository {
  list(): Promise<TTotals[]>
}

export {
  ITotalsController,
  ITotalsUseCase,
  ITotalsRepository
}