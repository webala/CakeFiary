import React, { useState, useEffect } from 'react'
import style from '../Cart.module.scss'
import {getCookie} from 'cookies-next'

function Cart({categories, flavours}: {categories: [], flavours: []}) {

    const [orderItemsIds, setOrderItemsIds] = useState([])

    
    

    

  return (
    <div className={style.cart}>
        {/* {orderItemsIds.map((id, index) => {
            const flavour = flavours.find((flavour) => flavour.id == id)
            return (
                // <h1>{flavour.name}</h1>
            )
        })} */}
    </div>
  )
}

export default Cart