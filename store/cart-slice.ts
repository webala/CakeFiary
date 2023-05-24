/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../types";

const initialState: Cart = {
   cartItems: [],
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart(state, action) {
         const { cake } = action.payload;
         state.cartItems.push({ cake, addOns: [] });
      },
      removeFromCart(state, action) {
         const { cartItem } = action.payload;
         const index = state.cartItems.indexOf(cartItem);
         if (index) {
            state.cartItems.splice(index, 1);
         } else {
            return;
         }
      },
   },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
