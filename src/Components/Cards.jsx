import React from 'react'



const Cards = ( {name, para, icon:Icon}) => {
  return (
    <div className='bg-transparent border-purple-900 border shadow-2xl  flex justify-between items-center px-2 py-2 lg:w-50 w-50 h-20 rounded-2xl lg:gap-3 gap-1'>
        <Icon className='text-3xl text-purple-800'>{Icon}</Icon>

        <div className='flex flex-col justify-around items-start h-16'>
            <h2 className='text-sm font-bold'>{name}</h2>
            <p className=' text-sm '>{para}</p>
        </div>
      
    </div>
  )
}

export default Cards
