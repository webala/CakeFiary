import React from 'react'
import style from './Banner.module.scss'
import Image from 'next/image'
import breadsImage from '../../public/breads.jpg'
import fairy from '../../public/fairy.png'

function Banner() {
  return (
    <div className={style.banner}>
        <Image className={style.image} src={breadsImage} alt="banner" layout='intrinsic'/>
        {/* <Image className={style.fairy} alt='fairy' src={fairy} width={500} height={500}/> */}
        <p className={style.banner_text}>"You don't have to love cooking to cook, but you have to do more than love baking to bake. You have to bake out of love." <span> ~Tom Junod</span> </p>
    </div>
  )
}

export default Banner