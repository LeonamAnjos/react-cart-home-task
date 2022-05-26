import React, { useEffect, useState } from "react";
import { Product } from "../structures/product.structures";

type UseProductsProps = {
  url: string;
};

const useProducts = ({ url }: UseProductsProps): Product[] => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => response.data)
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(url, err)); // TODO: log it to remote
  }, [url]);

  return products;
};

export default useProducts;
