import { describe, expect, it } from "vitest"
import { ListPerPeriod, ListPerPeriodResponse } from "./list-per-period"
import { InMemoryListingRepository } from "@infra/repositories/in-memory/in-memory-listing-repository"
import { Listing } from "@application/entities/listing"
import { ListPerPeriodController } from "@infra/http/controller/listing/list-per-period"
import { PGListingRepository } from "@infra/repositories/pg/pg-listing-repository"

describe("[UseCase - Listing] List per Period", () => {
  it("should be able to create an use case of list per period using in-memory repository", () => {
    const repository = new InMemoryListingRepository();
    const listPerPeriodUseCase = new ListPerPeriod(repository);
  
    expect(listPerPeriodUseCase.execute()).toBeInstanceOf(Promise<Listing[]>);
  })

  it("should be able to create an use case of list per period using in-memory repository", () => {
    const repository = new PGListingRepository();
    const listPerPeriodUseCase = new ListPerPeriod(repository);
  
    expect(listPerPeriodUseCase.execute()).toBeInstanceOf(Promise<Listing[]>);
    expect(repository).toBeInstanceOf(PGListingRepository);
    expect(listPerPeriodUseCase).toBeInstanceOf(ListPerPeriod);
  })

  it("should be able to create an instance of usecase and controller", () => {
    const repository = new InMemoryListingRepository();
    const listPerPeriod = new ListPerPeriod(repository);
    const listPerPeriodController = new ListPerPeriodController(listPerPeriod);
  
    expect(listPerPeriod.execute()).toBeInstanceOf(Promise<ListPerPeriodResponse> );
    expect(listPerPeriodController).toBeInstanceOf(ListPerPeriodController);
  })
})


