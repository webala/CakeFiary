import React from 'react'
import Category from './components/Category'
import style from "./Menu.module.scss"




function Menu({categories, flavours}: {categories: [], flavours: []}) {
  return (
    <div className={style.menu_container}>
      <h1>Menu</h1>
      <div className={style.menu}>
        {categories.map((category:Object, index:number) => {
          return <Category key={index} flavours={flavours} category={category}/>
        })}
      </div>
    </div>
  )
}

export default Menu