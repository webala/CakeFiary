import React from "react";
import fairy from "../../public/fairy1.png";
import Image from "next/image";
import { GrSend } from "react-icons/gr";
import style from "./Subscribe.module.scss";

function Subscribe() {
	return (
		<div className={style.subscribe}>
			<Image className={style.image} src={fairy} alt="fairy" width={500} />

			<div className={style.form}>
				<h1>Get Updates</h1>
				<p>Subscribe to our newsletter and get a discount of up to 30%</p>
				<div>
					<input type="email" placeholder="Your email address"/>
					<button>
						<GrSend className={style.icon}/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Subscribe;
