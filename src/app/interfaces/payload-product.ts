import { Product } from "./product";

export type ProductPayload = Omit<Product, 'id'>