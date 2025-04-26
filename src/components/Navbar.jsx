import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleMenuItemClick = () => {
    setIsMenuOpen(false) // Close the menu when a list item is clicked
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center mx-12 py-4'>
        <img src={Logo} alt="Logo" className='md:h-10 h-8' />
        {/* Hamburger Icon for Mobile */}
        <button
          className='lg:hidden text-black'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Desktop Menu */}
        <div className='hidden lg:flex lg:items-center'>
          <ul className='flex flex-row space-x-3 text-black font-poppins font-bold'>
            <li className='text-red-800'><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Offers</a></li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-black font-poppins font-bold'>
          {/* Close Icon */}
          <button
            className='absolute top-4 right-4 text-black'
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <ul className='flex flex-col items-center space-y-6'>
            <li className='text-red-800'>
              <a href="#home" onClick={handleMenuItemClick}>Home</a>
            </li>
            <li>
              <a href="#menu" onClick={handleMenuItemClick}>Menu</a>
            </li>
            <li>
              <a href="#about" onClick={handleMenuItemClick}>About Us</a>
            </li>
            <li>
              <a href="#contact" onClick={handleMenuItemClick}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar