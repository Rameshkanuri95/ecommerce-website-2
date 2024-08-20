import { configureStore } from "@reduxjs/toolkit"
import cartSlice, { cartMiddileWare } from "./features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddileWare),
})
