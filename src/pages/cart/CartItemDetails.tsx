import React from "react";
import ElementCard from "../../components/ElementCard";
import { useCartStore } from "../stores/useCartStore";
import { CartItem } from "../structures/cart.structures";
import RemoveFromCartButton from "./RemoveFromCartButton";
import CoveragePriceCaption from "../commons/CoveragePriceCaption";

type CartItemProps = {
  item: CartItem;
};

const CartItemDetails = ({ item }: CartItemProps) => {
  const { removeItem } = useCartStore();

  const handleRemoveFromCartClick = () => {
    removeItem(item);
  };

  return (
    <ElementCard
      title={item.product.name}
      actions={<RemoveFromCartButton onClick={handleRemoveFromCartClick} />}
    >
      <CoveragePriceCaption coverage={item.coverage} price={item.price} />
    </ElementCard>
  );
};

export default CartItemDetails;
