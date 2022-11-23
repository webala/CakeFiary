import React from 'react'
import style from '../Menu.module.scss'
import {MdAddShoppingCart} from 'react-icons/md'

function MenuItem({name}:{name:string}) {
  return (
      <div className={style.menu_item}>
        <p className={style.item_name}>{name}</p>
        <MdAddShoppingCart className={`${style.add_to_cart} hover:animate-bounce`} />
      </div>
  )
}

export default MenuItem