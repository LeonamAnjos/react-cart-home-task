import { CartItem } from "../structures/cart.structures";

type WithPrice = Pick<CartItem, "price">;

const totalValue = (items: WithPrice[]): number => {
  return items.reduce((sum: number, item: WithPrice) => sum + item.price, 0);
};

const firstLetter = (str: string): string => {
  const tmpStr = str.trim();
  return tmpStr.length > 0 ? tmpStr[0].toUpperCase() : "";
};

export { totalValue, firstLetter };
