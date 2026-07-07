import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'

function Heading({icon:Icon,name1,name2,head,para1,para2}) {
  return (
    <div className='flex flex-col justify-center items-center text-center py-2 gap-1 '>
      <Icon className='md:text-3xl text-2xl text-purple-600'>{Icon}</Icon>
      <h3 className='lg:text-xl text-lg text-purple-600'>{head}</h3>
      <h1 className='lg:text-4xl text-3xl font-bold'>{name1} <span className='text-purple-600'>{name2}</span></h1>
    <span className='bg-purple-600 w-20 h-1 rounded-full'></span> 
      <p className='text-sm'>{para1} <br/> {para2}</p>
      
    </div>
  )
}

export default Heading

