import React from 'react'
import Button from './Button'

const Product = ({val , mover , count }) => {
  return (
    <div className='w-full py-6 text-white h-[18rem] p-8'>
        <div onMouseEnter={() => {
            mover(count)
        }} className='container mx-auto flex items-center justify-between'>
            <h1 className='text-3xl font-semibold capitalize'>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-6 text-md'>{val.description}</p>
                <div className='flex items-center gap-10'>
                {val.live && <Button title='Get Started' />}
                {val.case && <Button title='Case Study' />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product