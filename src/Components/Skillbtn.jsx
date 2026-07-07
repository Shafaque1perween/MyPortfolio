import React from 'react'
import { FaHtml5 } from "react-icons/fa";

function Skillbtn({icon:Icon,name}) {
  return (
    <div className='flex justify-center items-center gap-6 h-10 w-40 border border-gray-400 px-2 py-1 rounded-2xl'>
        
        <Icon className='text-3xl text-purple-800'>{Icon}</Icon>
        <h2 className='text-sm font-semibold'>{name}</h2>
      
    </div>
  )
}

export default Skillbtn
