import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { calcPrice, Product } from "../structures/product.structures";
import ElementCard from "../../components/ElementCard";
import LocaleContext from "../../context/LocaleContext";
import CoverageSlider from "../commons/CoverageSlider";
import AddToCartButton from "./AddToCartButton";
import { useCartStore } from "../stores/useCartStore";
import { firstLetter } from "../utils/utils";
import CoveragePriceCaption from "../commons/CoveragePriceCaption";
import { CartItem } from "../structures/cart.structures";

type ProductDetailsProps = {
  product: Product;
};

const formatSubTitle = (minCoverage: string, maxCoverage: string) =>
  `Coverage from ${minCoverage} to ${maxCoverage}`;

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [coverage, setCoverage] = useState(product.maxCoverage);
  const [price, setPrice] = useState(calcPrice(coverage, product.risk));

  const { items, addItem } = useCartStore();
  const { currencyFormat } = useContext(LocaleContext);

  const handleCoverageChange = (coverage: number): void => {
    setCoverage(coverage);
    setPrice(calcPrice(coverage, product.risk));
  };

  const isInCartList = (productId: number): boolean => {
    return !!items.find((item: CartItem) => item.product.id === productId);
  };

  const handleAddToCartClick = (): void => {
    addItem({ product, coverage, price });
  };

  return (
    <ElementCard
      avatar={<Avatar>{firstLetter(product.name)}</Avatar>}
      title={product.name}
      subTitle={formatSubTitle(
        currencyFormat(product.minCoverage),
        currencyFormat(product.maxCoverage)
      )}
      actions={
        <AddToCartButton
          onClick={handleAddToCartClick}
          disabled={isInCartList(product.id)}
        />
      }
    >
      <CoverageSlider
        minCoverage={product.minCoverage}
        maxCoverage={product.maxCoverage}
        onCoverageChange={handleCoverageChange}
      />

      <CoveragePriceCaption coverage={coverage} price={price} />
    </ElementCard>
  );
};

export default ProductDetails;
