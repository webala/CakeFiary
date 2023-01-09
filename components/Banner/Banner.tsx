import React from "react";
import style from "./Banner.module.scss";
import Image from "next/image";
import bg from "../../public/breads.jpg";
import { GiFairyWand } from "react-icons/gi";

function Banner() {
	return (
		<div className={style.banner}>
			<Image src={bg} alt="banner" width={2000} className={style.image} />

			<div className={style.banner_text}>
				<div className={style.heading}>
					<h1>Cake Fairy</h1>
					<GiFairyWand />
				</div>
        <p></p>
			</div>
			{/* <div className={style.fairy_container}>
        <Image
          src={cake}
          width={300}
          height={100}
          alt="fairy"
          className={style.cake}
        />
        <Image
          src={fairy2}
          width={300}
          height={300}
          alt="fairy"
          className={style.fairy}
        />
      </div> */}
		</div>
	);
}

export default Banner;
