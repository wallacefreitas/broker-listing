import { Request, Response } from "express";
import { ListPerPeriod } from "@application/use-cases/listing/list-per-period/list-per-period";

export class ListPerPeriodController {
  constructor(private listPerPeriodUseCase: ListPerPeriod) {}

  async handle(_: Request, response: Response) {
    try {
      const listings = await this.listPerPeriodUseCase.execute()
      return response.render('index', { listings });

    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}