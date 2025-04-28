import React from 'react'
import HeroImg from '../assets/hero-img.png'
import { motion } from 'framer-motion'

const container = (delay) => ({

   hidden: { opacity: 0 , x: -100},
   visible : {opacity : 1, x: 0, transition: {duration: 0.5, delay: delay}}

})


const Hero = () => {
  return (
    <div className='md:flex items-center justify-between mt-12 pb-4 lg:mt-20' id='home'>
        <div>
            <motion.h1
            variants={container(0.2)}
            initial='hidden'
            animate='visible'
            className='text-4xl lg:text-7xl md:5xl font-prosto tracking-wide text-brandRed'>Nachos Are Your Best Friend</motion.h1>
            <motion.p
            variants={container(0.4)}
            initial='hidden'
            animate='visible'
            >Feeling Bored ? A better for you product <br /> made with love.</motion.p>
            <motion.button
            variants={container(0.6)}
            initial='hidden'
            animate='visible'
            className='bg-brandRed mt-6 hover:border hover:bg-transparent text-white py-2 px-4 rounded-lg'>Order Now</motion.button>
        </div>
        <div>
            <motion.img
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0, transition: {duration: 0.5, delay: 0.8}}}
            src={HeroImg} className='' alt="" />
        </div>
  
    </div>
  )
}

export default Hero