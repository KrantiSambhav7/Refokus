import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Card = ({width , start , para , hover="false"}) => {
  
  return (
    <motion.div whileHover={{ backgroundColor: hover==="true" &&  "#7443ff" , color: hover==="true" && "white" }} className={`bg-pink-100 text-zinc-800 p-5 rounded-xl ${width} min-h-[60vh] flex flex-col justify-between `}>
        <div className='w-full'>
        <div className='w-full flex  items-center justify-between'>
            <h3>REFOKUS</h3>
            <div className='hidden lg:block'><FaArrowRightLong /></div>
        </div>
        <h1 className='text-2xl font-medium mt-10'>Join our team.</h1>
        </div>
        <div className='down w-full mt-30 lg:mt-60'>
            {start && 
            <>
                <h1 className='text-5xl font-semibold tracking-tight leading-none'>Start a project</h1>
                <button className={`rounded-full py-1 px-3 border-[1px] ${hover==="true" && "bg-zinc-700 && text-white"} border-black mt-8`}>Contact Us</button>
            </>}  
            {para && <p className={`text-md`}>Explore what drives our team.</p>}
        </div>
    </motion.div>
  )
}

export default Card