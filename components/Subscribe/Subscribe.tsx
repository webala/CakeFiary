import React from "react";
import fairy from "../../public/fairy1.png";
import Image from "next/image";
import { GrSend } from "react-icons/gr";
import style from "./Subscribe.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Subscribe() {
	return (
		<div className={style.subscribe}>
			<AnimationOnScroll animateIn="animate__fadeInLeftBig">
				<Image className={style.image} src={fairy} alt="fairy" width={500} />
			</AnimationOnScroll>
			<div className={style.form}>
				<h1>Get Updates</h1>
				<p>Subscribe to our newsletter and get a discount of up to 30%</p>
				<AnimationOnScroll animateIn="animate__fadeInRight">
					<div>
						<input type="email" placeholder="Your email address" />

						<button>
							<GrSend className={style.icon} />
						</button>
					</div>
				</AnimationOnScroll>
			</div>
		</div>
	);
}

export default Subscribe;
