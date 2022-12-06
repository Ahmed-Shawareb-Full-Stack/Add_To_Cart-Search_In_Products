//! ─── Imports ─────────────────────────────────────────────────────────────────

import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  toggleCart,
  closeCart,
} from "./slices/cartSlice";

//! ─── Store ───────────────────────────────────────────────────────────────────

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export {
  store,
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  toggleCart,
  closeCart,
};
