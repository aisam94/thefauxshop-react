import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addItem: (newItem) => set((state) => ({ cart: [...state.cart, newItem] })),
  removeAllItems: () => set({ cart: [] }),
}));