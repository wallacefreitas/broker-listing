import { ListPerPeriodController } from "@infra/http/controller/listing/list-per-period";
import { PGListingRepository } from "@infra/repositories/pg/pg-listing-repository";
import { ListPerPeriod } from "./list-per-period";

const pgListingRepository = new PGListingRepository()
const listPerPeriod = new ListPerPeriod(pgListingRepository);
const listPerPeriodController = new ListPerPeriodController(listPerPeriod);

export { listPerPeriod, listPerPeriodController }