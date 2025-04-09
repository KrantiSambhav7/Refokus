import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

const Button = ({title = "Get Started"}) => {
  return (
    <div className='max-w-40 px-4 py-1 bg-zinc-100 text-black rounded-full flex items-center justify-between gap-4 cursor-pointer'>
        <span className='text-sm font-semibold '>{title}</span>
        <span className='text-2xl'>
            <MdArrowRightAlt />
        </span>
    </div>
  )
}

export default Button