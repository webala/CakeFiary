import React from 'react'
import style from "../Menu.module.scss"
import MenuItem from './MenuItem'


function Category({flavours, category}:{flavours:[], category:Object}) {

  const categoryFlavours:Object[] = flavours.filter((flavour:Object) => {
    return flavour.category.name === category.name
  })

  
  return (
    <div className={style.caregory}>
      <h1>Starting @{category.point_five}</h1>
      {categoryFlavours.map((flavour:Object, index:number) => {
        return <MenuItem key={index} name={flavour.name}/>
      })}
    </div>
  )
}

export default Category