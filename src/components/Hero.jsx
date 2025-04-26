import React from 'react'
import HeroImg from '../assets/hero-img.png'
const Hero = () => {
  return (
    <div className='md:flex items-center justify-between mt-12 lg:mt-20' id='home'>
        <div>
            <h1 className='text-4xl lg:text-7xl md:5xl font-prosto tracking-wide text-brandRed'>Nachos Are Your Best Friend</h1>
            <p>Feeling Bored ? A better for you product <br /> made with love.</p>
            <button className='bg-brandRed mt-6 text-white py-2 px-4 rounded-lg'>Order Now</button>
        </div>
        <div>
            <img src={HeroImg} className='' alt="" />
        </div>
  
    </div>
  )
}

export default Hero