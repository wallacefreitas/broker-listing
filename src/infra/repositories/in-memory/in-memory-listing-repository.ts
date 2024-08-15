import { randomUUID } from "crypto";
import { ListingProps as Listing } from "@application/entities/listing";
import { ListingRepository } from "@application/repositories/listing-repository";

export class InMemoryListingRepository implements ListingRepository {
  private listing: Listing[] = [
    {
      id: randomUUID(),
      date: new Date(),
      month: "January",
      broker: "www.teste1.com",
      revenue: 3000
    },
    {
      id: randomUUID(),
      date: new Date(),
      month: "February",
      broker: "www.teste2.com",
      revenue: 4000
    },
    {
      id: randomUUID(),
      date: new Date(),
      month: "March",
      broker: "www.teste3.com",
      revenue: 5000
    },
  ];

  async listPerPeriod(): Promise<Listing[]> {
    return this.listing
  }

  async listGraph(): Promise<any[]> {
    throw new Error("Method not implemented.");
  }
}