import { CartItem } from "../structures/cart.structures";

const totalValue = (items: Pick<CartItem, "price">[]): number => {
  return items.reduce(
    (sum: number, item: Pick<CartItem, "price">) => sum + item.price,
    0
  );
};

const firstLetter = (str: string): string => {
  const tmpStr = str.trim();
  return tmpStr.length > 0 ? tmpStr[0].toUpperCase() : "";
};

export { totalValue, firstLetter };
