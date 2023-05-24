/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../types";
import { v4 as uuidv4 } from "uuid";

const initialState: Cart = {
   cartItems: [],
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart(state, action) {
         const id = uuidv4();
         const { cake } = action.payload;
         state.cartItems.push({ id, cake, addOns: [] });
      },
      removeFromCart(state, action) {
         const { id } = action.payload;
         const exists = state.cartItems.find((item) => item.id === id);
         if (exists) {
            const index = state.cartItems.indexOf(exists);
            state.cartItems.splice(index, 1);
         } else {
            return;
         }
      },
      addAddon(state, action) {
         const { id, addon } = action.payload;
         const cartItem = state.cartItems.find((item) => item.id === id);
         if (cartItem) {
            cartItem.addOns.push(addon);
         }
      },
      removeAddOn(state, action) {
         const { id, addon } = action.payload;
         const cartItem = state.cartItems.find((item) => item.id === id);
         if (cartItem) {
            const exists = cartItem.addOns.find(
               (item) => item._id === addon._id
            );
            if (exists) {
               const index = cartItem.addOns.indexOf(exists);
               cartItem.addOns.splice(index, 1);
            }
         }
      },
   },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
