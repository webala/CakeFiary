import React from "react";
import Category from "./components/Category";
import style from "./Menu.module.scss";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import flavours from '../../data'

function Menu() {
	return (
		<div className={style.menu_container}>
			<AnimationOnScroll animateIn="animate__shakeX">
				<h1 className={style.title}>What We Make</h1>
			</AnimationOnScroll>

			<div className={style.flavours}>
				{flavours.map((flavour, index) => {
					return (
						<div className={style.flavour} key={index}>
							<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
								<Image
									src={flavour.image}
									alt={`${flavour.name}`}
									width={700}
									height={700}
									className={style.image}
								/>
							</AnimationOnScroll>

							<div className={style.name}>
								<h1>{flavour.name}</h1>
								{/* <BsCartPlus className={style.icon}/> */}
							</div>

							<p>
								Starting @ ksh <span> 800</span>
							</p>

							<AnimationOnScroll animateIn="animate__heartBeat" delay={1000}>
								<button>Order now</button>
							</AnimationOnScroll>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Menu;
