import React from 'react'
import style from './NavBar.module.scss'
import {BsInfoCircle, BsTelephone, BsCart, BsSearch}  from 'react-icons/bs'


function NavBar() {
  return (
    <div className={style.navbar}>
        <div className={style.nav_item}>
            <p>About</p>
            <BsInfoCircle className='md:hover:animate-bounce'/>
        </div>
        <div className={style.nav_item}>
            <p>Contact</p>
            <BsTelephone className='md:hover:animate-bounce'/>
        </div>
        <div className={style.heading}>
            <h1>Cake Fairy</h1>
        </div>
        <div className={style.nav_item}>
            <p>Cart</p>
            <BsCart className='md:hover:animate-bounce'/>
        </div>
        <div className={style.nav_item}>
            <p>Search</p>
            <BsSearch className='hover:animate-bounce'/>
        </div>
    </div>
  )
}

export default NavBar