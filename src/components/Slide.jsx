import { motion } from 'framer-motion'
import React from 'react'

const Slide = ({val , direction }) => {
  
  return (      
    <div className='flex w-full overflow-hidden' >
      <motion.div  initial={{x: direction==='left' ? "0"  : "-100%"}} animate={{x: direction === "left" ? "-100%" : "0"}} transition={{ease: "linear" , duration: 10, repeat: Infinity}} className='flex flex-shrink-0 gap-40 py-10 pr-40'>
      {val.map(url => (
            <img src={url} alt="" />
        ))}
      </motion.div>

      <motion.div initial={{x: direction==='left' ? "0"  : "-100%"}} animate={{x: direction === "left" ? "-100%" : "0"}} transition={{ease: "linear" , duration: 10, repeat: Infinity}} className='flex flex-shrink-0 gap-40 py-10 pr-40'>
      {val.map(url => (
            <img src={url} alt="" />
        ))}
      </motion.div>
        
    </div>
  )
}

export default Slide