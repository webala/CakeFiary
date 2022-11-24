import React, {useRef} from 'react'
import style from './NavBar.module.scss'
import {BsInfoCircle, BsTelephone, BsCart, BsSearch, BsFacebook, BsInstagram}  from 'react-icons/bs'
import {CgMenuBoxed} from 'react-icons/cg'
import Link from 'next/link'
import { FiTwitter } from 'react-icons/fi'
import {GiFairyWand} from 'react-icons/gi'
import Cart from '../Cart/Cart'
import {useDisclosure} from '@chakra-ui/react'


function NavBar() {

    const btnRef = useRef()
    const {onOpen, isOpen, onClose} = useDisclosure()
  return (
    <div className={style.navbar_container}>
        <div className={style.navbar}>
            <div className={`${style.nav_item} group`}>
                <p>Menu</p>
                <CgMenuBoxed className='md:group-hover:animate-bounce'/>
            </div>
            <div className={`${style.nav_item} group`}>
                <p>Contact</p>
                <BsTelephone className='md:group-hover:animate-bounce'/>
            </div>
            <div className={style.heading}>
                <h1>Cake Fairy</h1>
                <GiFairyWand />
            </div>
            <button className={`${style.nav_item} group`} ref={btnRef} onClick={onOpen}>
                <p>Cart</p>
                <BsCart className='md:group-hover:animate-bounce'/>
            </button>
            <div className={`${style.nav_item} group`}>
                <p>Search</p>
                <BsSearch className='md:group-hover:animate-bounce'/>
            </div>
        </div>
        <div className={style.social_links}>
            <Link href="#" className='hover:animate-bounce'><BsFacebook /></Link>
            <Link href="#" className='hover:animate-bounce'><BsInstagram /></Link>
            <Link href="#" className='hover:animate-bounce'><FiTwitter /></Link>
        </div>
        <Cart btnRef={btnRef} isOpen={isOpen} onClose={onClose}/>
    </div>
  )
}

export default NavBar