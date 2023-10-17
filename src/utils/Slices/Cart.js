import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // takes two inputs as state and action & this will modify
      // the state acc to the action
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop(); // (action.payload.id)
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = Cart.actions;

export default Cart.reducer;
