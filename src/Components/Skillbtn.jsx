import React from 'react'
import { FaHtml5 } from "react-icons/fa";

function Skillbtn({icon:Icon,name}) {
  return (
    <div className='flex justify-center items-center gap-2 h-10 px-4 py-2  border border-gray-400   w-fit rounded-2xl'>
        
        <Icon className=' text-3xl text-purple-800'>{Icon}</Icon>
        <h2 className=' text-sm font-semibold'>{name}</h2>
      
    </div>
  )
}

export default Skillbtn
