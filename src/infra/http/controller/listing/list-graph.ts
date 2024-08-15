import { Request, Response } from "express";
import { ListGraph } from "@application/use-cases/listing/list-graph/list-graph";

export class ListGraphController {
  constructor(private listGraphUseCase: ListGraph) {}

  async handle(_: Request, response: Response) {
    try {
      const listings = await this.listGraphUseCase.execute()
      return response.json({ listings });

    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}