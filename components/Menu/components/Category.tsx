import React from 'react'
import style from "../Menu.module.scss"
import MenuItem from './MenuItem'


function Category({flavours, category}:{flavours:[], category:Object}) {

  // const categoryFlavours:Object[] = flavours.filter((flavour:Object) => {
  //   return flavour.category.name === category.name
  // })

  
  return (
    <div className={style.caregory}>
      {/* <h1>{category.name}</h1>
      <sub>Starting from ksh {category.point_five}</sub>
      <div>
        {categoryFlavours.map((flavour:Object, index:number) => {
          return <MenuItem key={index} name={flavour.name} id={flavour.id}/>
        })}
      </div> */}
    </div>
  )
}

export default Category