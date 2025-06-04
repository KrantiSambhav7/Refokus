import React from 'react'
import Button from './Button'
import { motion, stagger } from 'framer-motion'
const Navbar = () => {
  return (
    <div className='container py-4 mx-auto flex items-center justify-between border-b-[1px] border-zinc-500  pr-6'>
     <div className='flex items-center ml-6'>
     <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <motion.div initial={{y: 10 , opacity: 0 , filter: "blur(4px)" }} animate={{y:0 , opacity: 1 , filter: "blur(0px)"}} transition={{duration: 1}} className='hidden lg:flex links  gap-14 ml-40'>
            {["Home" , "Culture" , "Work" , "" , "News"].map( (item , index) => (
                <a className='text-[16px] flex items-center gap-1' href="">
                    {item.length === 0 ? <span className='w-[1px] h-5 bg-zinc-300'></span> : null }
                    {index === 1 && <span className='inline-block w-1 h-1 rounded-full bg-green-500'></span> }   
                    {item}
                </a>
            ))}
        </motion.div>
     </div>
     <Button />
    </div>

  )
}

export default Navbar