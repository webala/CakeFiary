import React from "react";
import style from "./About.module.scss";
import about1 from "../../public/about1.jpg";
import about2 from "../../public/about2.jpg";
import about3 from "../../public/banner.jpg";
import about4 from "../../public/about4.jpg";
import Image from "next/image";

import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
	return (
		<div className={style.about}>
			{/* <h1>Our Story</h1> */}
			<div className={style.our_story}>
				<AnimationOnScroll animateIn="animate__shakeX">
				<h1 className={style.heading}>Our Story</h1>
				</AnimationOnScroll>

				<AnimationOnScroll animateIn="animate__fadeInLeft">
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
					autem iusto, placeat hic repellat eum commodi quas nesciunt atque
					harum, maxime voluptates tempore ut, laboriosam ab voluptate amet
					reprehenderit omnis. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Fuga quo repellat facere voluptatem hic ad nobis
					eos. Possimus veniam itaque quaerat animi? Architecto voluptatum
					repellat deserunt. Maiores fugit veniam magni explicabo dignissimos?
				</p>
				</AnimationOnScroll>
			</div>

			<AnimationOnScroll animateIn="animate__fadeInRightBig">
				<div className={style.images}>
					<Image
						className={`${style.item1} ${style.item}`}
						src={about1}
						width={2000}
						alt="image"
					/>
					<Image
						className={`${style.item2} ${style.item}`}
						src={about2}
						width={2000}
						alt="image"
					/>
					<Image
						className={`${style.item3} ${style.item}`}
						src={about3}
						width={2000}
						alt="image"
					/>
					<Image
						className={`${style.item4} ${style.item}`}
						src={about4}
						width={2000}
						alt="image"
					/>
				</div>
			</AnimationOnScroll>
		</div>
	);
}

export default About;
