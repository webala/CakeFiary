import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'

import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'
import NavBar from '../components/NavBar/NavBar'
import Subscribe from '../components/Subscribe/Subscribe'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'


// export async function getServerSideProps() {

  
//   let response = await fetch("http://localhost:8000/bakery/api/categories")
//   const categories = await response.json()

//   response = await fetch("http://localhost:8000/bakery/api/flavours")
//   const flavours = await response.json()
  

//   return {
//     props: {
//       categories,
//       flavours
//     }
//   }
// }

export default function Home() {

  
  // const [bestSellers, setBestSellets] = useState([])

  // useEffect(() => {
  //   setBestSellets([flavours[4], flavours[0], flavours[3] ])
  // }, [])

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Cake Fairy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fairy1.png" />
      </Head>

      <NavBar />
      <Banner/>
      <Menu/>

      <Subscribe />
      
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
