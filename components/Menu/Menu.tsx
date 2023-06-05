/** @format */

import React from "react";
import style from "./Menu.module.scss";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useQuery } from "react-query";
import { fetchCakes } from "../../utils";
import { Spinner, useToast } from "@chakra-ui/react";
import { Cake } from "../../types";
import placeholder from "../../public/Cake.png";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

function Menu() {
	const dispatch = useDispatch();
	const toast = useToast();

	const {
		data: cakes,
		isLoading,
		isError,
		isSuccess,
		error,
	} = useQuery(["cakes"], fetchCakes);

	return (
		<div className={style.menu_container}>
			<AnimationOnScroll animateIn="animate__shakeX">
				<h1 className={style.title}>What We Make</h1>
			</AnimationOnScroll>

			<div className={style.flavours}>
				{isLoading && <Spinner color="red.500" />}
				{isSuccess && (
					<>
						{cakes.map((cake: Cake, index: number) => (
							<div key={index} className={style.flavour}>
								<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
									<Image
										src={cake.cakeImage ? cake.cakeImage : placeholder}
										alt={cake.name}
										width={700}
										height={700}
										className={style.image}
									/>
								</AnimationOnScroll>

								<div className={style.name}>
									<h1>{cake.name}</h1>
								</div>

								<p>
									ksh <span> {cake.price}</span>
								</p>

								<AnimationOnScroll animateIn="animate__heartBeat" delay={1000}>
									<button
										onClick={() => {
											dispatch(cartActions.addToCart({ cake }));
											toast({
												title: `${cake.name} added to cart`,
												status: "success",
												duration: 9000,
												isClosable: true,
											});
										}}
									>
										<BsCartPlus className={style.icon} />
									</button>
								</AnimationOnScroll>
							</div>
						))}
					</>
				)}
			</div>
		</div>
	);
}

export default Menu;
