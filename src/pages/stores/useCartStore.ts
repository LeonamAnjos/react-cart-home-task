import create from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "../structures/cart.structures";

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
};

export const useCartStore = create<CartState, [["zustand/persist", CartState]]>(
  persist(
    (set) => ({
      items: [] as CartItem[],
      addItem: (item: CartItem) => {
        set((state: CartState) => ({
          ...state,
          items: [
            ...state.items.filter(
              ({ product }) => product.id !== item.product.id
            ),
            item,
          ],
        }));
      },
      removeItem: (item: CartItem) => {
        set((state: CartState) => ({
          ...state,
          items: [
            ...state.items.filter(
              ({ product }) => product.id !== item.product.id
            ),
          ],
        }));
      },
    }),
    {
      name: "cart-store",
    }
  )
);
