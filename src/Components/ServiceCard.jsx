import React from 'react'


function ServiceCard({ icon: Icon, name, para }) {
  return (
    <div className='w-85 bg-transparent h-50 px-4 py-4 shadow-2xl  border border-purple-300 flex flex-col gap-6  rounded-2xl'>
      <div className='flex flex-col justify-between items-start'>
        <Icon className='bg-purple-300 h-12 w-12 rounded-full text-xl text-purple-600 flex justify-center items-center '>{Icon}</Icon>

        <h1 className='text-lg font-semibold'>{name}</h1>
        <span className='w-12 h-1 bg-purple-600 rounded-full'></span>
      </div>

      <p>{para}</p>


    </div>
  )
}

export default ServiceCard
