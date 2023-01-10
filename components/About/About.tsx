import React from "react";
import style from "./About.module.scss";
import about1 from '../../public/about1.jpg'
import about2 from '../../public/about2.jpg'
import about3 from '../../public/banner.jpg'
import about4 from '../../public/about4.jpg'
import Image from "next/image";
function About() {
	return (
		<div className={style.about}>
      {/* <h1>Our Story</h1> */}
			<div className={style.our_story}>
				<h1 className={style.heading}>Our Story</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
					autem iusto, placeat hic repellat eum commodi quas nesciunt atque
					harum, maxime voluptates tempore ut, laboriosam ab voluptate amet
					reprehenderit omnis.
				</p>
			</div>

      <div className={style.images}>
        <Image className={`${style.item1} ${style.item}`} src={about1} width={2000} alt="image" />
        <Image className={`${style.item2} ${style.item}`} src={about2} width={2000} alt="image" />
        <Image className={`${style.item3} ${style.item}`} src={about3} width={2000} alt="image" />
        <Image className={`${style.item4} ${style.item}`} src={about4} width={2000} alt="image" />
      </div>
		</div>
	);
}

export default About;
