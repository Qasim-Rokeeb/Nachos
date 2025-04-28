import React from 'react'
import DishOne from '../assets/dish1.png'
import DishTwo from '../assets/dish2.png'
import DishThree from '../assets/dish3.png'
import {Star } from 'lucide-react'
import { motion } from 'framer-motion'
const Menu = () => {
  return (
    <div className='mt-12 pb-4 lg:mt-20 ' id='menu'>
        <motion.h1
        initial={{opacity: 0, y: -100}}
        whileInView={{opacity: 1, y: 0, transition: {duration: 0.5}}}
        
        className='text-4xl lg:text-6xl md:text-4xl font-prosto tracking-wide text-brandRed'>Best Dishes <br />
        From Our Menu </motion.h1>
        <div>
            <motion.div
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0, transition: {duration: 0.5}}}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                <div className='bg-white shadow-lg rounded-3xl p-4'>
                    <img src={DishOne} alt="Dish 1" className='rounded-t-lg mx-auto' />
                    <h2 className='text-xl font-bold mt-4'>Avocados Nachos</h2>
                    <p className='text-gray-600'>Description of Dish 1</p>
                    <div className='flex justify-between items-center mt-4'>
                      <div>
                        <h3  className='font-bold text-2xl font-poppins'><span className='text-red-800'>$</span>10</h3>
                      </div>
                      <div className= 'flex text-gray-400 font-bold '> <span className='text-yellow-400 '><Star /></span> 4.9   </div>
                    </div>
                </div>
                <div className='bg-white shadow-lg rounded-3xl p-4'>
                    <img src={DishTwo}alt="Dish 2" className='rounded-t-lg mx-auto' />
                    <h2 className='text-xl font-bold font-poppins mt-4'>Best Seller Naschos</h2>
                    <p className='text-gray-600'>Description of Dish 2</p>
                    <div className='flex justify-between items-center mt-4'>
                      <div>
                        <h3  className='font-bold text-2xl font-poppins'><span className='text-red-800'>$</span>10</h3>
                      </div>
                      <div className= 'flex text-gray-400 font-bold '> <span className='text-yellow-400 '><Star /></span> 4.9   </div>
                    </div>
                </div>
                <div className='bg-white shadow-lg rounded-3xl p-4'>
                    <img src={DishThree}alt="Dish 3" className='rounded-t-lg mx-auto' />
                    <h2 className='text-xl font-bold mt-4'>Original Nachos</h2>
                    <p className='text-gray-600'>Description of Dish 3</p>
                    <div className='flex justify-between items-center mt-4'>
                      <div>
                        <h3  className='font-bold text-2xl font-poppins'><span className='text-red-800'>$</span>10</h3>
                      </div>
                      <div className= 'flex text-gray-400 font-bold '> <span className='text-yellow-400 '><Star /></span> 4.9   </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Menu