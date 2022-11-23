import React from 'react'
import Category from './components/Category'
import style from "./Menu.module.scss"


function Menu() {
  return (
    <div className={style.menu}>
        <Category />
        <Category />
        <Category />
        <Category />
    </div>
  )
}

export default Menu