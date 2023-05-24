/** @format */

import React from "react";
import style from "./Menu.module.scss";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import flavours from "../../data";
import { useQuery } from "react-query";
import { fetchCakes } from "../../utils";
import { Spinner } from "@chakra-ui/react";
import { Cake } from "../../types";
import placeholder from "../../public/Cake.png";
import { BsCartPlus } from "react-icons/bs";

function Menu() {
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
                              src={
                                 cake.cakeImage ? cake.cakeImage : placeholder
                              }
                              alt={cake.name}
                              width={700}
                              height={700}
                              className={style.image}
                           />
                        </AnimationOnScroll>

                        <div className={style.name}>
                           <h1>{cake.name}</h1>
                           <button>
                              <BsCartPlus className={style.icon} />
                           </button>
                        </div>

                        <p>
                           ksh <span> {cake.price}</span>
                        </p>

                        <AnimationOnScroll
                           animateIn="animate__heartBeat"
                           delay={1000}
                        >
                           <button>Order now</button>
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
