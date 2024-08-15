import PoolClient from "@infra/services/db/db";
import { ListingProps as Listing } from "@application/entities/listing";

import { ListingRepository } from "@application/repositories/listing-repository";

export class PGListingRepository implements ListingRepository {
  constructor(private pool = PoolClient) {}

  async listPerPeriod(): Promise<Listing[]> {
    const result = await this.pool.query(`
      SELECT
          d.id AS listing_id,
          TO_CHAR(d.listing_date, 'YYYY-MM') AS listing_month,
          d.listing_date,
          s.title AS broker,
          d.revenue
      FROM
          deals d
      JOIN
          sites s ON d.site_id = s.id
      WHERE
          d.listing_date BETWEEN '2020-11-01' AND '2021-11-30'
      ORDER BY
          broker ASC,
          listing_month ASC;
  `);
    return result.rows;
  }

  async listGraph(): Promise<any[]> {
    const result = await this.pool.query(`
      SELECT
        s.title AS broker,
        TO_CHAR(d.listing_date, 'YYYY-MM') AS listing_month,
        COUNT(d.id) AS total_listings,
        AVG(d.revenue) AS average_revenue
      FROM
        deals d
      JOIN
        sites s ON d.site_id = s.id
      WHERE
        d.listing_date BETWEEN '2020-11-01' AND '2021-11-30'
      GROUP BY
        s.title,
        TO_CHAR(d.listing_date, 'YYYY-MM')
      ORDER BY
        listing_month ASC,
        broker ASC;
    `);

    return result.rows;
  }
}

