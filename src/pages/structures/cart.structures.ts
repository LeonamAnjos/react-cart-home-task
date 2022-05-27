import { Product } from "./product.structures";

export type CartItem = {
  product: Product;
  coverage: number;
  price: number;
};
