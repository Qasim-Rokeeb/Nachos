import React from 'react'
import FoodImg from '../assets/food.png'
import { motion } from 'framer-motion'

const container = (delay) => ({

  hidden: { opacity: 0 , x: 100},
  visible : {opacity : 1, x: 0, transition: {duration: 0.5, delay: delay}}

})

const About = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center py-8 gap-4 justify-between mt-16 lg:mt-35' id='about'>
        <div>
            <motion.img
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0, transition: {duration: 0.5,}}}
            src={FoodImg} className='w-[450px]' alt="" />
        </div>
        <div className='md:w-1/2 w-full'> 
          <motion.h1
          variants={container(0.2)}
          initial='hidden'
          whileInView='visible'
          className='text-4xl lg:text-7xl md:5xl font-prosto tracking-wide text-brandRed'>Crunchy & Flavourful</motion.h1>
          <motion.p
          variants={container(0.4)}
          initial='hidden'
          whileInView='visible'
          >The ultimate crunch with our nachos, crafted for snack lovers who crave bold flavors and high quality. Each chip is packed with the perfect balance of seasoning, creating a delicious experience in every bite. Our nachos bring a fun, flavorful twist to any snack moment, making them the ideal choice for gatherings, parties, or a quick treat on the go.</motion.p>
          <motion.button
          variants={container(0.6)}
          initial='hidden'
          whileInView='visible'
          className='bg-brandRed mt-6 text-white py-2 px-4 rounded-lg'>Order Now</motion.button>
        </div>
    </div>
  )
}

export default About