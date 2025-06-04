import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='container mx-auto py-10 flex gap-3 pl-4'>
            <div className='basis-1/2'>
                <h1 className='text-7xl font-semibold leading-none tracking-tight '>refokus.</h1>
            </div>
            <div className='ml-20 basis-1/2 flex gap-2'>
                <div className='basis-1/ lg:basis-1/4 hidden lg:block '>
                    <h1 className='mb-10 underline'>Socials</h1>
                    {["Instagram" , "Twitter" , "LinkedIn"].map((item , index) => (
                        <a className='block mt-3  capitalise' href="">{item}</a>
                    ))}
                </div>

                <div  className='hidden lg:block basis-1/4'>
                    <h1 className='mb-10 underline '>Socials</h1>
                    {["Instagram" , "Twitter" , "LinkedIn"].map((item , index) => (
                        <a className='block mt-3 capitalise' href="">{item}</a>
                    ))}
                </div>
                
                <div className='hidden lg:block basis-1/3'>
                    <p className='text-xs text-right'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium nisi eveniet accusantium nostrum, suscipit esse dolorum impedit sun.
                    </p>
                </div>


                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Footer