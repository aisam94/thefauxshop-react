import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addItem: (newItem) => set((state) => ({ cart: [...state.cart, newItem] })),
  removeItem: (id) => set((state) => ({ cart: state.cart.filter(item => item.id !== id) })),
  removeAllItems: () => set({ cart: [] }),
}));