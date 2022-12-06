//! ─── Imports ─────────────────────────────────────────────────────────────────

import { createSlice } from "@reduxjs/toolkit";

//! ─── Cart Slice ──────────────────────────────────────────────────────────────

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    addItemToCart(state, action) {
      const itemToAdd = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemToAdd) {
        itemToAdd.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart(state, action) {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemToRemove.quantity === 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      } else {
        itemToRemove.quantity--;
      }
    },
    deleteItemFromCart(state, action) {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    },
    toggleCart(state, action) {
      state.isOpen = !state.isOpen;
    },
    closeCart(state, action) {
      state.isOpen = false;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  toggleCart,
  closeCart
} = cartSlice.actions;
