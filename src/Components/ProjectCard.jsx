import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { LiaDumbbellSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";


function ProjectCard({image,icon:Icon, name1,name2, para,tag1,tag2,tag3,link1, link2}) {
    return (
        <div className='bg-gray-100 flex flex-col  items-start h-120   md:w-70 w-69 rounded-2xl border border-purple-600 shadow-2xl'>
            <img src={image} className='h-[40%]  rounded-2xl  ' />
            <div className='px-2 py-4 gap-3 flex flex-col justify-start items-start h-[50%]'>
                <div className='flex justify-between items-center gap-2'>
                <Icon className='text-purple-950 text-2xl'>{Icon}</Icon>
                    <h1 className='text-lg font-semibold'>{name1}</h1>
                </div>
                <p className='text-sm  pb-2 border-b border-b-gray-600'>{para}</p>
                
                {/* <span className='w-60 h-0.5 bg-gray-400 rounded-2xl'></span> */}
                <h2>{name2}</h2>
                <div className='flex justify-start items-start gap-2  w-auto h-12 '>
                    <a href='#' className='text-sm font-semibold px-2 py-1 border border-purple-600 text-purple-950 rounded-lg'>{tag1}</a>
                    <a href='#' className='text-sm font-semibold px-2 py-1 border border-purple-600 text-purple-950 rounded-lg'>{tag2}</a>
                    <a href='#' className='text-sm font-semibold px-2 py-1 border border-purple-600 text-purple-950 rounded-lg'>{tag3}</a>
                </div>
                <div className='flex justify-between items-center gap-2  h-12 '>
                    <a href={link1} className='flex justify-between items-center gap-2 text-purple-950 font-bold border border-purple-600 px-4 py-2 w-full rounded-lg'>
                       <FaExternalLinkAlt />
                    LiveDemo
                    </a>
                    {/* <button>Live Demo</button> */}

                    <a href={link2} className='flex justify-between items-center gap-3 text-black font-bold border border-black px-4 py-2 rounded-lg w-full'>
                       <FaGithub />
                        GitHub
                        </a>
                    {/* <button>GitHub</button> */}
                </div>


            </div>




        </div>
    )
}

export default ProjectCard
