/** @format */

import React, { useState } from "react";
import style from "../Cart.module.scss";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../types";

function Cart() {
   const cartItems = useSelector((state: GlobalState) => state.cart.cartItems);
   
   return <div className={style.cart}></div>;
}

export default Cart;
