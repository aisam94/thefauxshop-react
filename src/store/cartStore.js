import { create } from "zustand";
import { persist } from 'zustand/middleware'

export const useCartStore = create(persist((set) => ({
  cart: [],
  addItem: (newItem) => set((state) => ({ cart: [...state.cart, newItem] })),
  removeItem: (id) => set((state) => ({ cart: state.cart.filter(item => item.id !== id) })),
  removeAllItems: () => set({ cart: [] }),
}),
  {
    name: "cart-storage",
  }
));