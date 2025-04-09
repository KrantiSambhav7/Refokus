import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full '>
        <div className='container mx-auto py-20 flex gap-2'>
            <Card width={"basis-1/3"} start={false} para={true} hover='true'/>
            <Card width={"basis-2/3"} start={true} para={false} hover="true" />
        </div>
    </div>
  )
}

export default Cards