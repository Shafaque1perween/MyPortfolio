import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { IoCodeSlash, IoLogoWhatsapp } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import profile from "../assets/profile.jpeg"
import { LuDownload } from "react-icons/lu";


const Hero = () => {
    return (
        <div className=' flex justify-center items-center lg:px-20 px-8   sm:py-2  w-full min-h-120 ' id='home'>
            {/* hero-rightside-content-start    */}
            <div className='  flex flex-col justify-between gap-4 px-4 pt-20 min-h-80  md:w-[60%] w-full '>

                {/* hero-button */}
                <div className='  flex justify-center items-center  shadow-2xl border border-purple-300 lg:w-70  md:w-60 w-50 h-10  px-2 py-1 rounded-full gap-3 text-purple-800 top-2.5 font-semibold '>
                    <IoCodeSlash />
                    <h2>Frontend Developer</h2>
                </div>
                {/* hero-text */}
                <div className='flex flex-col justify-between gap-4'>
                    <h1 className='lg:text-4xl text-3xl  font-semibold leading-snug'>Hi, I'm <br /><span className='text-purple-800 mt-16'>Shafaque Perween </span></h1>
                    <p className='  text-gray-500 text-sm'>I build modern, responsive, and user-friendly websites using React, JavaScript, Tailwind CSS, HTML, and CSS. I enjoy turning ideas into clean, fast, and engaging web experiences.</p>
                </div>
                {/* contact button */}
                <div className='flex items-center justify-start gap-2'>
                    <a href='https://gym-web-ivory-eta.vercel.app' className='bg-purple-800    text-white flex lg:gap-3 gap-1 rounded-2xl lg:px-6  px-1  py-2 hover:bg-purple-900 cursor-pointer '>View My Work<span className=' text-xl py-1 '><GoArrowRight /></span></a>
                    <a href='/Shafaque Perween_.pdf' download className='flex justify-center lg:gap-3 gap-1 lg:px-6  px-2 py-2 rounded-2xl  bg-purple-800 text-white hover:bg-purple-900  '>Download Cv<span className='  text-xl py-1'><LuDownload /></span></a>

                </div>
                {/* icons button */}
                <div className='flex justify-start items-center  gap-4 '>
                    <div className='bg-purple-100  w-12  h-12 shadow-purple-300  shadow-2xl rounded-full flex justify-center items-center text-purple-800 hover:bg-purple-700 hover:text-white'>
                        <a className='text-3xl' href='https://github.com/Shafaque1perween'><FaGithub /></a>
                    </div>
                    <div className='bg-purple-100 w-12  h-12 shadow-purple-300  shadow-2xl rounded-full flex justify-center items-center text-purple-800 hover:bg-purple-700 hover:text-white'>
                        <a className='text-3xl' href='https://www.linkedin.com/in/shafaque-perween-0799b3236'><FaLinkedin /></a>
                    </div>
                    <div className='bg-purple-100 w-12  h-12 shadow-purple-300  shadow-2xl rounded-full flex justify-center items-center text-purple-800 hover:bg-purple-700 hover:text-white'>
                        <a className='text-3xl' href="mailto:alshafacoll246@gmail.com" ><FiMail /></a>
                    </div>
                    <div className='bg-purple-100 w-12  h-12 shadow-purple-300  shadow-2xl rounded-full flex justify-center items-center text-purple-800 hover:bg-purple-700 hover:text-white'>
                        <a className='text-3xl' href="mailto:alshafacoll246@gmail.com" ><IoLogoWhatsapp /></a>
                    </div>
                </div>

            </div>
            {/* hero-rightside-content-end    */}

            {/* hero-leftside-content-start    */}
            <div className=' w-[40%] min-h-80 md:flex hidden justify-center items-center py-12 px-10  '>
                <div className='relative z-0'>
                    {/* main imge */}
                    <img src={profile} className=' flex justify-center items-center text-center rounded-full  h-70 w-70' />




                    <div className='absolute top-0 left-20 -translate-x-30 translate-y-15  bg-white h-12 w-12  flex justify-center items-center text-4xl text-sky-400 bordrer rounded-xl shadow-2xl shadow-purple-700'>
                        <SiReact />
                    </div>

                    <div className='absolute top-2/2 left-20 -translate-x-18  -translate-y-15   h-12 w-12  flex justify-center bg-white items-center text-4xl text-sky-400 bordrer rounded-xl shadow-2xl shadow-purple-700'>
                        <RiTailwindCssFill />
                    </div>

                    <div className='absolute top-2/2 right-0 translate-x-15  -translate-y-40   bg-white h-12 w-12  flex justify-center items-center text-4xl text-purple-600 bordrer rounded-xl shadow-2xl shadow-purple-700'>
                        <IoCodeSlash />
                    </div>

                </div>
            </div>












        </div>

    )
}

export default Hero
