import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Footer from './components/Footer'




const App = () => {
  return (
    <>
     <div className="max-w-7xl mx-auto pt-8 px-6">

   
      <Navbar />
      < Hero />
      <About />
      <Menu/>
      <Contact/>
      
      </div>
      <Footer />
    </>
  )
}

export default App