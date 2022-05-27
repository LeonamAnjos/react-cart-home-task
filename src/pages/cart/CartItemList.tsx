import React from "react";
import { CartItem } from "../structures/cart.structures";
import CartItemDetails from "./CartItemDetails";

type CartItemListProps = {
  items: CartItem[];
};

const CartItemList = ({ items }: CartItemListProps) => {
  return (
    <>
      {items.map((item) => (
        <CartItemDetails key={item.product.id} item={item} />
      ))}
    </>
  );
};

export default CartItemList;
