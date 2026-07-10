import React from 'react'


function Tag({ name, para, icon:Icon }) {
    return (

        <div className='flex justify-center text-center items-center w-[25%] h-auto gap-6 border-r-2 border-purple-600'>
            {/* <Icon className='text-3xl text-purple-800'/> */}
            <Icon className='text-3xl text-purple-800'>{Icon}</Icon>

            <div className='flex flex-col justify-between items-center text-center'>
                <h2 className='font-bold  text-purple-800'>{name}</h2>
                <p className='text-sm'>{para}</p>
            </div>





        </div>


    )
}

export default Tag


