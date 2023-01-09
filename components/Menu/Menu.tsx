import React from "react";
import Category from "./components/Category";
import style from "./Menu.module.scss";
import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";

function Menu({ categories, flavours }: { categories: []; flavours: [] }) {
	console.log("flavours: ", flavours);
	return (
		<div className={style.menu_container}>
			<h1 className={style.title}>What We Make</h1>

			<div className={style.flavours}>
				{flavours.map((flavour) => {
					return (
						<div className={style.flavour}>
							<Image
								src={flavour.image}
								alt={`${flavour.name}`}
								width={700}
								height={700}
								className={style.image}
							/>

							<div className={style.name}>
								<h1>{flavour.name}</h1>
								{/* <BsCartPlus className={style.icon}/> */}
							</div>

							<p>
								Starting @ ksh <span> {flavour.category.point_five}</span>
							</p>

              <button>Order now</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Menu;
