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
                <Link className={style.link} href="#">Home</Link>
                <Link className={style.link} href="#">Menu</Link>
                <Link className={style.link} href="#">About</Link>
            </div>
            <div  className={style.links}>
                <Link className={style.link} href="#">Contact</Link>
                <Link className={style.link} href="#">Terms of servece</Link>
            </div>
        </div>
        <div  className={style.social}>
            <h1>Cake Fairy</h1>
            <div className={style.social_links}>
                <Link className={style.link} href="#"><BsFacebook /></Link>
                <Link className={style.link} href="#"><BsInstagram /></Link>
                <Link className={style.link} href="#"><FiTwitter /></Link>
            </div>
            <sub><AiOutlineCopyrightCircle />Cake Fairy 2022</sub>
        </div>
    </div>
  )
}

export default Footer