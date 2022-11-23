import React from 'react'
import style from '../Menu.module.scss'
import {MdAddShoppingCart} from 'react-icons/md'

function MenuItem({name}:{name:string}) {
  return (
    <div>
        <div className={style.menu_item}>
            <div className={style.item_details}>
                <p className={style.item_name}>{name}</p>
            </div>
            <MdAddShoppingCart className={`${style.add_to_cart} hover:animate-bounce`} />
        </div>
    </div>
  )
}

export default MenuItem