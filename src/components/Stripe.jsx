 import React from 'react'
 
 const Stripe = ({val}) => {
   return (
    <div className=' mt-10 max-w-72 px-10 py-2 lg:py-4 border-t-2 border-b-2 border-r-2 gap-10 border-zinc-700 flex justify-between items-center'>
        <img className='object-cover w-16' src={val.url} alt="" />
        <span className='font-semibold ml-2 lg:ml-0'>{val.number}</span>
    </div>
   )
 }
 
 export default Stripe