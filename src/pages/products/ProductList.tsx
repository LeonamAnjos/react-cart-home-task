import React from "react";
import { Product } from "../structures/product.structures";
import ProductDetails from "./ProductDetails";

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.map((product) => (
        <ProductDetails key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
