import { Router, Request, Response } from "express";
import { listPerPeriodController } from "@application/use-cases/listing/list-per-period";
import { listGraphController } from "@application/use-cases/listing/list-graph";

const router = Router();

router.get('/listings', (request: Request, response: Response) => {
  return listGraphController.handle(request, response);
})

router.get('/', (request: Request, response: Response) => {
  return listPerPeriodController.handle(request, response);
})

export { router }