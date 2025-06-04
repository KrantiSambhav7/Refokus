import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';

const Products = () => {
    var products = [
        {
          title: "Arqitel",
          description:
            "With a continuous 3D animation, we showcase how migration data translates into real estate.",
          live: true,
          case: false,
        },
        {
          title: "TTR",
          description:
            "We've created an interactive site using generative AI to allow users to engage with our thinking about AI",
          live: true,
          case: false,
        },
        {
          title: "YIR 2022",
          description:
            "Our second year was filled with great events, exciting projects, awards and amazing people.",
          live: true,
          case: false,
        },
        {
          title: "Yahoo!",
          description:
            "We enhanced the New York Fashion Week website and an integrated web shop.",
          live: true,
          case: true,
        },
        {
          title: "Rainfall",
          description:
            "We crafted a website for Rainfall Ventures, allowing their team to update content regularly.",
          live: true,
          case: true,
        },
      ];

    const [pos , setPos] = useState(0);
    const mover = (val) => {
      setPos(val * 23 );
    }
      
  return (
    <div className='mt-10 lg:mt-4 relative'>
        {products.map( (item , index) => (
            <Product val={item} mover={mover} count={index} />
        ))}
        <div className='absolute top-0 w-full h-full pointer-events-none'>
          <motion.div transition={{ease: [0.76 , 0 , 0.24 , 1] , duration: 0.6 }} initial={{y: pos , x: "-50%"}} animate={{y : pos + `rem`}} className='window absolute h-[23rem] w-[32rem] left-[44%]  overflow-hidden'>
            <motion.div transition={{ease: [0.76 , 0 , 0.24 , 1] , duration: 0.6 }} animate={{y: -pos + `rem`}} className='w-full h-full '></motion.div>
            <motion.div transition={{ease: [0.76 , 0 , 0.24 , 1] , duration: 0.6 }} animate={{y: -pos + `rem`}} className='w-full h-full '></motion.div>
            <motion.div transition={{ease: [0.76 , 0 , 0.24 , 1] , duration: 0.6 }} animate={{y: -pos + `rem`}} className='w-full h-full '></motion.div>
            <motion.div transition={{ease: [0.76 , 0 , 0.24 , 1] , duration: 0.6 }} animate={{y: -pos + `rem`}} className='w-full h-full '></motion.div>
          </motion.div>
        </div>
    </div>
  )
}

export default Products 