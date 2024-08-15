import { ListGraphController } from "@infra/http/controller/listing/list-graph";
import { PGListingRepository } from "@infra/repositories/pg/pg-listing-repository";
import { ListGraph } from "./list-graph";


const pgListingRepository = new PGListingRepository()
const listGraph = new ListGraph(pgListingRepository);
const listGraphController = new ListGraphController(listGraph);

export { listGraph, listGraphController }