/** @format */

import React from "react";
import style from "../Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AddOn, CartItem, GlobalState } from "../../../types";
import Image from "next/image";
import placeholder from "../../../public/Cake.png";
import { MdDelete } from "react-icons/md";
import { cartActions } from "../../../store/cart-slice";

function Cart() {
   const cartItems = useSelector((state: GlobalState) => state.cart.cartItems);
   const dispatch = useDispatch();
   return (
      <div className={style.cart}>
         {cartItems.length > 0 ? (
            <div className={style.cartItems}>
               {cartItems.map((item: CartItem, index: number) => (
                  <div key={index} className={style.cartItem}>
                     <div className={style.cake}>
                        <Image
                           src={
                              item.cake.cakeImage
                                 ? item.cake.cakeImage
                                 : placeholder
                           }
                           alt={item.cake.name}
                           width={70}
                           height={70}
                           className={style.image}
                        />
                        <h1>{item.cake.name}</h1>
                        <p>@ ksh{item.cake.price}</p>
                        <button
                           className={style.delete}
                           onClick={() =>
                              dispatch(
                                 cartActions.removeFromCart({ id: item.id })
                              )
                           }
                        >
                           <MdDelete />
                        </button>
                     </div>
                     <div className={style.addons}>
                        {item.cake.availableAddons.length > 0 && (
                           <div className={style.list}>
                              {" "}
                              <h2>Select add ons for this cake</h2>
                              {item.cake.availableAddons.map(
                                 (addon: AddOn, index: number) => {
                                    const selected = item.addOns.find(
                                       (addonItem) =>
                                          addon._id === addonItem._id
                                    );
                                    return (
                                       <div key={index} className={style.addon}>
                                          <label>{addon.name}</label>
                                          <p>@ ksh{addon.price}</p>
                                          <input
                                             type="checkbox"
                                             checked={selected ? true : false}
                                             onClick={() => {
                                                if (selected) {
                                                   dispatch(
                                                      cartActions.removeAddOn({
                                                         id: item.id,
                                                         addon,
                                                      })
                                                   );
                                                } else {
                                                   dispatch(
                                                      cartActions.addAddon({
                                                         id: item.id,
                                                         addon,
                                                      })
                                                   );
                                                }
                                             }}
                                          />
                                       </div>
                                    );
                                 }
                              )}
                           </div>
                        )}

                        <div className={style.total}>
                           <small>Item total </small>
                           <p>ksh 10000</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         ) : (
            <div>
               <p>Nothing in your cart</p>
            </div>
         )}
         <form className={style.checkout}>
            <h1 className="heading">Checkout</h1>
            <div className={`field ${style.field}`}>
               <label>Full name</label>
               <input type="text" required />
            </div>
            <div className={`field ${style.field}`}>
               <label htmlFor="">Email</label>
               <input type="email" required />
            </div>
            <div className={`field ${style.field}`}>
               <label>Phone number</label>
               <input type="text" required />
            </div>
            <div className={`actions ${style.actions}`}>
               <button className="submit">Checkout</button>
            </div>
         </form>
      </div>
   );
}

export default Cart;
