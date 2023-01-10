import React from 'react'
import style from '../Menu.module.scss'
import {MdAddShoppingCart} from 'react-icons/md'
import {setCookie, hasCookie, getCookie} from 'cookies-next'

function MenuItem({name, id}:{name:string, id:number}) {


  // const setOrderItem = (flavour_id:string) => {
  //   if (!hasCookie('order_items')) {
  //     let order_items = { }
  //     order_items[`${flavour_id}`] = {quantity: 1}
      
  //     console.log('created dict: ', order_items)
  //     setCookie('order_items', order_items)
  //   }
  //   else {
  //     let order_items = JSON.parse(getCookie('order_items'))
  //     console.log('existing dict: ', order_items)

  //     if (order_items[flavour_id]) {
  //       order_items[flavour_id]["quantity"] += 1
  //     }
  //     else {
  //       order_items[`${flavour_id}`] = {quantity: 1}
  //     }

  //     setCookie('order_items', order_items)
  //   }
  // }

  return (
      <div className={style.menu_item}>
        {/* <p className={style.item_name}>{name}</p>
        <MdAddShoppingCart className={`${style.add_to_cart} hover:animate-bounce`} onClick={ () => setOrderItem(id.toString())}/> */}
      </div>
  )
}

export default MenuItem