import React from 'react'


function ServiceCard({icon:Icon, name, para}) {
  return (
    <div className='w-80 bg-transparent h-60 px-4 py-4 shadow-2xl  border border-purple-300 flex flex-col justify-between  rounded-2xl'>
        <Icon className='bg-purple-300 h-12 w-12 rounded-full text-xl text-purple-600 flex justify-center items-center '>{Icon}</Icon>
       <h1 className='text-xl font-semibold'>{name}</h1>
       <span className='w-12 h-1 bg-purple-600 rounded-full'></span>
       <p>{para}</p>
        
      
    </div>
  )
}

export default ServiceCard
