import style from './BestSellers.module.scss'
import React, { useState } from 'react'
import Image from 'next/image'
import {MdOutlineAddShoppingCart} from 'react-icons/md'

function BestSellers({bestSellers}) {

    
    console.log('best sellers: ', bestSellers)
  return (
    <div className={style.best_sellers}>
        <h1>Our Best Sellers</h1>
        <p>These are our top selling items. Customer demand for these items is increasing by the day.</p>
        <div className={style.items}>
            {bestSellers.map((item, index) => {
                <div key={index} className={style.item}>
                    <Image src={item.image} alt={item.name} width={700} height={700}/>
                    <div>
                        <p>{item.name}</p>
                        <MdOutlineAddShoppingCart />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default BestSellers