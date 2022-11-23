import React from 'react'
import style from "../Menu.module.scss"
import MenuItem from './MenuItem'


function Category() {
  return (
    <div className={style.caregory}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
    </div>
  )
}

export default Category