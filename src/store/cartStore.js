import { create } from "zustand";
import { persist } from 'zustand/middleware'

function parseItem(newItem, cart) {
  // check if item already exist in cart
  if (cart.some(item => item.id === newItem.id)) {
    let newCart = cart.map(item => {
      if (item.id === newItem.id) return { ...item, stock: ++item.stock };
      return item;
    })
    return newCart;
  }
  // if item is not already in cart
  return { cart: [...cart, { ...newItem, stock: 1 }] };
}

// add to item stock and return new cart
function addStock(id, cart) {
  let newCart = cart.map(item => {
    if (item.id === id) return { ...item, stock: ++item.stock };
    return item;
  })
  return { cart: newCart };
}

// minus item stock and return new cart
function minusStock(id, cart) {
  let newCart = cart.map(item => {
    if (item.id === id && item.stock > 0) return { ...item, stock: --item.stock };
    return item;
  })
  return { cart: newCart };
}

// update item stock and return new cart
function updateStock(id, cart, value) {
  let newCart = cart.map(item => {
    if (item.id === id) {
      return { ...item, stock: value };
    }
    return item;
  })
  return { cart: newCart };
}

export const useCartStore = create(persist((set) => ({
  cart: [],
  addItem: (newItem) => set((state) => (parseItem(newItem, state.cart))),
  addItemStock: (id) => set((state) => (addStock(id, state.cart))),
  minusItemStock: (id) => set((state) => (minusStock(id, state.cart))),
  updateItemStock: (id, value) => set((state) => (updateStock(id, state.cart, value))),
  removeItem: (id) => set((state) => ({ cart: state.cart.filter(item => item.id !== id) })),
  removeAllItems: () => set({ cart: [] }),
}),
  {
    name: "cart-storage",
  }
));