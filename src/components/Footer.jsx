import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='container mx-auto py-10 flex gap-3'>
            <div className='basis-1/2'>
                <h1 className='text-7xl font-semibold leading-none tracking-tight '>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div className='basis-1/3'>
                    <h1 className='mb-10'>Socials</h1>
                    {["Instagram" , "Twitter" , "LinkedIn"].map((item , index) => (
                        <a className='block mt-3 text-zinc-600 capitalise' href="">{item}</a>
                    ))}
                </div>

                <div>
                    <h1 className='mb-10'>Socials</h1>
                    {["Instagram" , "Twitter" , "LinkedIn"].map((item , index) => (
                        <a className='block mt-3 text-zinc-600 capitalise' href="">{item}</a>
                    ))}
                </div>
                
                <div className='basis-1/3'>
                    <p className='text-xs text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iste officiis libero quas deserunt quo quia doloremque magnam! Mollitia, reiciendis.</p>
                </div>


                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Footer