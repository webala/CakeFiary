import React from 'react'
import style from './Contact.module.scss'

function Contact() {
  return (
    <div className={style.contact}>
        <h1  className={style.heading}>Contact Cake Fairy</h1>
        <form onSubmit={(e) => e.preventDefault()} className={style.input_form}>
            <div className={style.input_field}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Your email'/>
            </div>
            <div  className={style.input_field}>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Your name'/>
            </div>
            <div  className={style.input_field}>
                <label htmlFor="message">Message</label>
                <textarea placeholder='Your message' className={style.message_input}/>
            </div>
            <div  className={style.submit_container}>
                <button className='hover:scale-110 transition duration-200 ease-in'>Send message</button>
            </div>
        </form>
    </div>
  )
}

export default Contact