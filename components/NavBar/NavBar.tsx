import React, { useRef } from "react";
import style from "./NavBar.module.scss";
import {
	BsInfoCircle,
	BsTelephone,
	BsCart,
	BsSearch,
	BsFacebook,
	BsInstagram,
} from "react-icons/bs";
import { CgMenuBoxed } from "react-icons/cg";
import Link from "next/link";
import { FiTwitter } from "react-icons/fi";
import { GiFairyWand } from "react-icons/gi";
import {AiOutlineInfoCircle, AiOutlineHome} from 'react-icons/ai'
import CartDrawer from "../Cart/CartDrawer";
import { useDisclosure } from "@chakra-ui/react";

function NavBar({ categories, flavours }: { categories: []; flavours: [] }) {
	const btnRef = useRef<HTMLButtonElement>(null);

	const { onOpen, isOpen, onClose } = useDisclosure();
	return (
		<div className={style.navbar_container}>
			<div className={style.navbar}>
				<div className={`${style.nav_item} group`}>
					<p>Home</p>
					<AiOutlineHome className={`${style.icon} md:group-hover:animate-bounce`} />
				</div>
				<div className={`${style.nav_item} group`}>
					<p>About</p>
					<AiOutlineInfoCircle className={`${style.icon} md:group-hover:animate-bounce`} />
				</div>
				<div className={`${style.nav_item} group`}>
					<p>Contact</p>
					<BsTelephone className={`${style.icon} md:group-hover:animate-bounce`} />
				</div>
				<div className={style.heading}>
					<h1>Cake Fairy</h1>
					<GiFairyWand />
				</div>
        <div className={`${style.nav_item} group`}>
					<p>Menu</p>
					<CgMenuBoxed className={`${style.icon} md:group-hover:animate-bounce`} />
				</div>
				<button
					className={`${style.nav_item} group`}
					ref={btnRef}
					onClick={onOpen}
				>
					<p>Cart</p>
					<BsCart className={`${style.icon} md:group-hover:animate-bounce`} />
				</button>
				<div className={`${style.nav_item} group`}>
					<p>Search</p>
					<BsSearch className={`${style.icon} md:group-hover:animate-bounce`} />
				</div>
			</div>
			<div className={style.social_links}>
				<Link href="#" className="hover:animate-bounce">
					<BsFacebook className={style.icon}/>
				</Link>
				<Link href="#" className="hover:animate-bounce">
					<BsInstagram className={style.icon}/>
				</Link>
				<Link href="#" className="hover:animate-bounce">
					<FiTwitter className={style.icon}/>
				</Link>
			</div>
			<CartDrawer
				btnRef={btnRef}
				isOpen={isOpen}
				onClose={onClose}
				categories={categories}
				flavours={flavours}
			/>
		</div>
	);
}

export default NavBar;
