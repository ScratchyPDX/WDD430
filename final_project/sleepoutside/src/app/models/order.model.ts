import { CheckoutData } from "./checkout-data.model";

export interface Order extends CheckoutData {
  id: string;
}
