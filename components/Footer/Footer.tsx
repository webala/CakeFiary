import React from 'react'
import style from './Footer.module.scss'
import Link from 'next/link'
import {BsInstagram, BsFacebook} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

function Footer() {
  return (
    <div className={style.footer}>
        <div className={style.footer_links}>
            <div className={style.links}>
                <Link href="#">Home</Link>
                <Link href="#">Menu</Link>
                <Link href="#">About</Link>
            </div>
            <div  className={style.links}>
                <Link href="#">Contact</Link>
                <Link href="#">Terms of servece</Link>
            </div>
        </div>
        <div  className={style.social}>
            <h1>Cake Fairy</h1>
            <div className={style.social_links}>
                <Link href="#"><BsFacebook /></Link>
                <Link href="#"><BsInstagram /></Link>
                <Link href="#"><FiTwitter /></Link>
            </div>
            <sub><AiOutlineCopyrightCircle />Cake Fairy 2022</sub>
        </div>
    </div>
  )
}

export default Footer