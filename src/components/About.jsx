import React from 'react'
import FoodImg from '../assets/food.png'

const About = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center gap-4 justify-between mt-16 lg:mt-20' id='about'>
        <div>
            <img src={FoodImg} className='w-[450px]' alt="" />
        </div>
        <div className='md:w-1/2 w-full'> 
          <h1 className='text-4xl lg:text-7xl md:5xl font-prosto tracking-wide text-brandRed'>Crunchy & Flavourful</h1>
          <p>The ultimate crunch with our nachos, crafted for snack lovers who crave bold flavors and high quality. Each chip is packed with the perfect balance of seasoning, creating a delicious experience in every bite. Our nachos bring a fun, flavorful twist to any snack moment, making them the ideal choice for gatherings, parties, or a quick treat on the go.</p>
          <button className='bg-brandRed mt-6 text-white py-2 px-4 rounded-lg'>Order Now</button>
        </div>
    </div>
  )
}

export default About