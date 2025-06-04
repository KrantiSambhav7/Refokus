import React from 'react'
import { useState } from 'react';
import {motion, useMotionValueEvent, useScroll} from "framer-motion";

function Work() {

    const [images , setImages] = useState([
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
        top: "50%",
        left: "50%",
        isActive: false,
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
        top: "56%",
        left: "44%",
        isActive: false,
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
        top: "45%",
        left: "56%",
        isActive: false,
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
        top: "60%",
        left: "53%",
        isActive: false,
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
        top: "43%",
        left: "40%",
        isActive: false,
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
        top: "65%",
        left: "55%",
        isActive: false,
      },
    ]);

    const { scrollYProgress } = useScroll();
    scrollYProgress.on("change" , (latest) => {
      function imagesShow(arr){
        setImages(prev => (
          prev.map((item , index) => (
            arr.indexOf(index) === -1 ? (
              {...item , isActive : false}
            ): (
              {...item , isActive: true }
            ) 
          ))
        ))
      }

      switch(Math.floor(latest * 100)){
        case 0:
          imagesShow([])
          break;
        case 1:
          imagesShow([0])
          break;
        case 2:
          imagesShow([0 , 1])
          break;
        case 3:
          imagesShow([0 , 1 , 2])
          break;
        case 4:
          imagesShow([0 , 1 , 2 , 3 ])
          break;
        case 6:
          imagesShow([0 , 1 , 2 ,3 , 4 , 5])
          break;
      }
    })

  return (
    <div className='container mx-auto h-[40vh] lg:h-full'>
        <div className='w-full relative text-center'>
        <h1 className='mt-60 lg:mt-0 text-[40vw] lg:text-[30vw] leading-none font-medium select-none background-text text-transparent  text-red-500'>
        work
        </h1>
            <div className='absolute top-0 w-full h-full'>
                {images.map( (item , index) => (
                    item.isActive && <img className='absolute h-40 w-40 lg:h-60 object-cover lg:w-60 rounded-md -translate-x-1/2 -translate-y-1/2' style={{ top: item.top, left: item.left }} src={item.url} alt="" />
                ) )}
            </div>
        </div>
    </div>
  )
}

export default Work