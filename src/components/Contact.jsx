import React from 'react'
import Logo from '../assets/logo.png'
import { Linkedin,Twitter, Instagram } from 'lucide-react'

import { motion } from 'framer-motion'

const container = (delay) =>({
  hidden: {x: -100, opacity: 0},
  visible : {x:0, opacity:1,
  transition : {delay: delay, duration:0.5 }
,}
})

const Contact = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pb-4  lg:grid-cols-4 gap-6 mt-20' id='contact'>
       <motion.div
        variants={container(0.2)}
        initial='hidden'
        whileInView='visible'
       ><img src={Logo} alt="" />
       <p>We have the best nachos <br />with a better for you product, A healthier, tastier product!</p>
       </motion.div>
       <motion.div
        variants={container(0.4)}
        initial='hidden'
        whileInView='visible'>
       <h4 className='font-bold'>Useful links</h4>
        <ul>
        
        <li>About Us</li>
        <li>Event</li>
        <li> Menu </li>
        </ul></motion.div>
       <motion.div
       variants={container(0.6)}
       initial='hidden'
       whileInView='visible'  
       >
        <h4 className='font-bold'>Main Menu</h4>
          <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>Menu</li>
            <li>Reservations</li>
          </ul>
       </motion.div>
       <motion.div
       variants={container(0.8)}
       initial='hidden'
       whileInView='visible'>
         <h4 className='font-bold'>Contact Us</h4>
         <ul>
            <li>originall@email.com</li>
            <li>123 7357 483</li>
            <li>Social media</li>
            <div className='flex space-x-3'><Linkedin size={28} color="#292929" /><Twitter size={28} color="#292929" /><Instagram size={28} color="#292929" /></div>
         </ul>
       </motion.div>
    </div>
  )
}

export default Contact