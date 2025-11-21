import { CartItem } from "./cart-item.model";

export interface CheckoutData {
  fname: string;
  lname: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  cardNumber: string;
  expiration: string;
  code: string;
  items: CartItem[];
  orderTotal: number;
  shipping: number;
  tax: number;
  orderDate: string;
}
