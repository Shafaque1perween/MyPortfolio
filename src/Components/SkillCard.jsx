import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'

const SkillCard = ({icon:Icon,name,tag1, tag2, tag3,tag4,tag5 }) => {
    return (
        <div className='bg-white sm:h-90 h-85 sm:w-65 w-52 mg:px-4 py-2 gap-6 border-purple-300 border-2 rounded-2xl flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center px-4 py-2 gap-3'>
                <div className='bg-purple-200 w-15 h-15 rounded-full flex justify-center items-center'>
                    
                     <Icon className='text-4xl text-purple-800'>{Icon}</Icon>
                </div>
                <h1 className=' font-semibold text-lg text-purple-600'>{name}</h1>
                <span className='h-1 w-10 bg-purple-600 rounded-full'></span>

            </div>
            <div>
                <div className='flex justify-start items-center gap-3 md:px-4 md:py-2 px-2 py-1  '>
                    <span className='h-2 w-2 bg-purple-600 rounded-full '></span>
                    <h2>{tag1}</h2>
                </div>
                <div className='flex justify-start items-center gap-3 md:px-4 md:py-2 px-2 py-1  '>
                    <span className='h-2 w-2 bg-purple-600 rounded-full '></span>
                    <h2>{tag2}</h2>
                </div>
                <div className='flex justify-start items-center gap-3 md:px-4 md:py-2 px-2 py-1 '>
                    <span className='h-2 w-2 bg-purple-600 rounded-full '></span>
                    <h2>{tag3}</h2>
                </div>
                <div className='flex justify-start items-center gap-3 md:px-4 md:py-2 px-2 py-1 '>
                    <span className='h-2 w-2 bg-purple-600 rounded-full '></span>
                    <h2>{tag4}</h2>
                </div>
                <div className='flex justify-start items-center gap-3 md:px-4 md:py-2 px-2 py-1 '>
                    <span className='h-2 w-2 bg-purple-600 rounded-full '></span>
                    <h2>{tag5}</h2>
                </div>
            </div>

        </div>
    )
}

export default SkillCard

