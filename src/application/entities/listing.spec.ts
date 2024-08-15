import { describe, expect, it } from "vitest"
import { randomUUID } from "crypto"

import { Listing } from "./listing"

describe("[Entity] Listing", () => {
  it("should be able to create a broker listing", () => {
    const listing = new Listing({
      date: new Date(),
      month: "November",
      broker: "www.test.com",
      revenue: 100
    })
  
    expect(listing).toBeInstanceOf(Listing);
    expect(listing.month).toEqual("November");
  })

  it("should be able to alter a broker listing", () => {
    const listing = new Listing({
      id: randomUUID(),
      date: new Date(),
      month: "November",
      broker: "www.test.com",
      revenue: 100
    })
  
    expect(listing).toBeInstanceOf(Listing);
    expect(listing.month).toEqual("November");
  })

  it("should be able to change a month, date, broker, revenue", () => {
    const listing = new Listing({
      id: randomUUID(),
      date: new Date(),
      month: "November",
      broker: "www.test.com",
      revenue: 100
    })

    listing.month = "December";
    listing.date = new Date(new Date().setDate(3).toString());
    listing.broker = "www.test2.com";
    listing.revenue = 300;
  
    expect(listing).toBeInstanceOf(Listing);
    expect(listing.month).toEqual("December");
    expect(listing.date).toEqual(new Date(new Date().setDate(3).toString()));
    expect(listing.broker).toEqual("www.test2.com");
    expect(listing.revenue).toEqual(300);
  })
})