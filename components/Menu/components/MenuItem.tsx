import React from 'react'
import style from '../Menu.module.scss'
import {MdAddShoppingCart} from 'react-icons/md'
import {setCookie, hasCookie, getCookie} from 'cookies-next'

function MenuItem({name, id}:{name:string, id:number}) {


  const setOrderItem = (id:number) => {
   
  }
  return (
      <div className={style.menu_item}>
        <p className={style.item_name}>{name}</p>
        <MdAddShoppingCart className={`${style.add_to_cart} hover:animate-bounce`} onClick={ () => setOrderItem(id)}/>
      </div>
  )
}

export default MenuItem