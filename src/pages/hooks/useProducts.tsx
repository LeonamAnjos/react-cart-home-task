import React, { useEffect, useState } from "react";
import { Product } from "../structures/product.structures";

const useProducts = (): Product[] => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // TODO: fetch in API
    setProducts([
      {
        id: 1,
        name: "Bike",
        minCoverage: 0,
        maxCoverage: 3000,
        risk: 0.3,
      },
      {
        id: 2,
        name: "Jewelry",
        minCoverage: 500,
        maxCoverage: 10000,
        risk: 0.05,
      },
      {
        id: 3,
        name: "Electronics",
        minCoverage: 500,
        maxCoverage: 6000,
        risk: 0.35,
      },
      {
        id: 4,
        name: "Sports Equipment",
        minCoverage: 0,
        maxCoverage: 20000,
        risk: 0.3,
      },
    ]);
  }, []);

  return products;
};

export default useProducts;
