import React from 'react'
import Button from './Button'

const Product = ({val , mover , count }) => {
  return (
    <div className='w-full py-6 text-white h-[18rem]'>
        <div onMouseEnter={() => {
            mover(count) 
        }} className='container mx-auto flex items-center justify-between px-2 lg:px-8 rounded-xl h-40 my-4 lg:h-60 py-4 lg:py-2'>
            <h1 className='text-xl lg:text-3xl font-semibold capitalize'>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-6 text-md'>{val.description}</p>
                <div className='flex items-center gap-10'>
                {val.live && <Button title='Explore' />}
                <div className='hidden lg:flex'>{val.case && <Button title='Case Study' />}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product