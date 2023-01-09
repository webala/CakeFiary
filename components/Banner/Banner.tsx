import React from "react";
import style from "./Banner.module.scss";
import Image from "next/image";
import bg from "../../public/breads.jpg";
import { GrFormNextLink } from "react-icons/gr";

function Banner() {
	return (
		<div className={style.banner}>
			<h1>Memorable Taste Made With Love</h1>
			<p>
				The perfect cake everytime speciaally for you from our oven to yout door.
			</p>
      <button>
        <p>Order Now</p>
        <GrFormNextLink className={style.icon} />
      </button>
		</div>
	);
}

export default Banner;
