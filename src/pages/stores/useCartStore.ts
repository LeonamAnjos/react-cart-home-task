import create from "zustand";
import { CartItem } from "../structures/cart.structures";

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item: CartItem) => {
    set((state: CartState) => ({
      ...state,
      items: [
        ...state.items.filter(({ product }) => product.id != item.product.id),
        item,
      ],
    }));
  },
  removeItem: (item: CartItem) => {
    set((state: CartState) => ({
      ...state,
      items: [
        ...state.items.filter(({ product }) => product.id !== item.product.id),
      ],
    }));
  },
}));
