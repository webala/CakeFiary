/** @format */

import React, { useState } from "react";
import style from "../Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AddOn, CartItem, GlobalState } from "../../../types";
import Image from "next/image";
import placeholder from "../../../public/Cake.png";
import { MdDelete } from "react-icons/md";
import { cartActions } from "../../../store/cart-slice";
import { useMutation } from "react-query";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

function Cart() {
	const cartItems = useSelector((state: GlobalState) => state.cart.cartItems);
	const dispatch = useDispatch();
	const toast = useToast();
	const router = useRouter();

	const [name, setName] = useState<string>();
	const [phone, setPhone] = useState<string>();
	const [email, setEmail] = useState<string>();

	const { mutate, isLoading, isError, error } = useMutation(
		async () => {
			const data = {
				client: {
					name,
					phone,
					email,
				},
				orderItems: cartItems,
			};
			const response = await axios.post("http://localhost:8000/orders", data, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			return response.data;
		},
		{
			onSuccess: (data) => {
				console.log("data: ", data);
				toast({
					title: "Order placed",
					description: "Redirecting to payment",
					status: "success",
					duration: 9000,
					isClosable: true,
				});
				router.push(`/payment/${data._id}`);
			},
			onError: () => {
				toast({
					title: "Error",
					description: "Something went wrong. Please try again.",
					status: "error",
					duration: 9000,
					isClosable: true,
				});
			},
		}
	);

	return (
		<div className={style.cart}>
			{cartItems.length > 0 ? (
				<>
					<div className={style.cartItems}>
						{cartItems.map((item: CartItem, index: number) => (
							<div key={index} className={style.cartItem}>
								<div className={style.cake}>
									<Image
										src={
											item.cake.cakeImage ? item.cake.cakeImage : placeholder
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
											dispatch(cartActions.removeFromCart({ id: item.id }))
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
														(addonItem) => addon._id === addonItem._id
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
					<form
						className={style.checkout}
						onSubmit={(e) => {
							e.preventDefault();
							mutate();
						}}
					>
						<h1 className="heading">Checkout</h1>
						<div className={`field ${style.field}`}>
							<label>Full name</label>
							<input
								type="text"
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div className={`field ${style.field}`}>
							<label htmlFor="">Email</label>
							<input
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className={`field ${style.field}`}>
							<label>Phone number</label>
							<input
								type="text"
								onChange={(e) => setPhone(e.target.value)}
								required
							/>
						</div>
						<div className={`actions ${style.actions}`}>
							<button type="submit" className="submit">
								Checkout
							</button>
						</div>
					</form>
				</>
			) : (
				<div>
					<p>Nothing in your cart</p>
				</div>
			)}
		</div>
	);
}

export default Cart;
