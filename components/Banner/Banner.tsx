import React from 'react'
import style from './Banner.module.scss'
import Image from 'next/image'
import breadsImage from '../../public/breads.jpg'

function Banner() {
  return (
    <div className={style.banner}>
        <Image className={style.image} src={breadsImage} alt="banner" layout='intrinsic'/>
        <p className={style.banner_text}>"You don't have to love cooking to cook, but you have to do more than love baking to bake. You have to bake out of love." <span> ~Tom Junod</span> </p>
    </div>
  )
}

export default Banner