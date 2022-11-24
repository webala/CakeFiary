import React from "react";
import style from "./Banner.module.scss";
import Image from "next/image";
import breadsImage from "../../public/breads.jpg";
import fairy2 from "../../public/fairy2.png";

import cake from "../../public/Cake.png";

function Banner() {
  return (
    <div className={style.banner}>
      <Image
        src={breadsImage}
        alt="banner"
        layout="intrinsic"
        className={style.image}
      />
      <div className={style.fairy_container}>
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
      </div>
    </div>
  );
}

export default Banner;
