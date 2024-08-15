import { ListingProps as Listing } from "../entities/listing";

export interface ListingRepository {
  listPerPeriod(): Promise<Listing[]>;
  listGraph(): Promise<any[]>;
}