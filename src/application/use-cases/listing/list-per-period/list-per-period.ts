import { ListingProps } from "@application/entities/listing";
import { ListingRepository } from "@application/repositories/listing-repository";

export type Listing = ListingProps;
export type ListPerPeriodResponse = Listing[];

export class ListPerPeriod {
  constructor(private listingRepository: ListingRepository) { }

  async execute(): Promise<ListPerPeriodResponse> {
    return await this.listingRepository.listPerPeriod();
  }
}