import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/Cart";

const appStore = configureStore({
  reducer: {
    // this reducer is responsible to change the appStore (Redux store)
    cart: cartReducer,
  },
});

export default appStore;
