import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Slides from './components/Slides'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full bg-black text-white font-["Satoshi variable"] '>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Slides />
      <Cards />
      <Footer />
    </div>
  )
}

export default App