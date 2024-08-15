import { randomUUID } from "crypto";

export interface ListingProps {
  id?: string;
  month: string;
  date: Date;
  broker: string;
  revenue: number
}

export class Listing {
  private props: ListingProps;

  constructor(props: ListingProps) {
    if (!props.id) {
      props.id = randomUUID();
    }

    this.props = props;
  }

  get month() {
    return this.props.month;
  }

  set month(month: string) {
    this.props.month = month;
  }

  get date() {
    return this.props.date;
  }

  set date(date: Date) {
    this.props.date = date;
  }

  get broker() {
    return this.props.broker;
  }

  set broker(broker: string) {
    this.props.broker = broker;
  }

  get revenue() {
    return this.props.revenue;
  }

  set revenue(revenue: number) {
    this.props.revenue = revenue;
  }
}