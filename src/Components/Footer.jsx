import React from 'react'
import { IoCodeSlash, IoLogoWhatsapp } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaHeart, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

function Footer() {
    return (
        <div className='bg-gray-950 text-gray-200 w-full px-12 py-6 '>
            <div className='bg-gray-900 px-8 py-4 w-full flex-col md:flex-row flex justify-start items-start lg:gap-4 gap-6 border-b-2 border-b-gray-500'>
                <div className=' md:w-[25%] w-full flex flex-col justify-start items-start py-2 gap-5'>

                    <div className='flex flex-1  justify-items-start items-center text-center gap-3'>
                        <IoCodeSlash className='text-purple-600 font-bold text-2xl' />
                        <h1 className=' font-semibold lg:text-xl text-lg text-white'>Shafaque</h1>
                    </div>
                    <p>Frontend Developer passionate about creating modern, responsive and user-friendly web application. </p>
                    <div>
                        <div className='flex justify-start items-center  gap-4 '>
                            <div className='bg-transparent  w-12  h-12 border border-white   rounded-full flex justify-center items-center  hover:bg-purple-700 '>
                                <a className='text-3xl' href='https://github.com/Shafaque1perween'><FaGithub /></a>
                            </div>
                            <div className='bg-transparent border border-white w-12  h-12  rounded-full flex justify-center items-center  hover:bg-purple-700 '>
                                <a className='text-3xl' href='https://www.linkedin.com/in/shafaque-perween-0799b3236'><FaLinkedin /></a>
                            </div>
                            <div className='bg-transparent border border-white  w-12  h-12  rounded-full flex justify-center items-center  hover:bg-purple-700 '>
                                <a className='text-3xl' href="mailto:alshafacoll246@gmail.com" ><FiMail /></a>
                            </div>
                            <div className='bg-transparent border border-white  w-12  h-12  rounded-full flex justify-center items-center   hover:bg-purple-700'>
                                <a className='text-3xl' href="mailto:alshafacoll246@gmail.com" ><IoLogoWhatsapp /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-[20%] w-full  '>
                    <h1 className='flex-col flex justify-between text-xl font-bold gap-3 text-purple-600'>Quick Links
                        <span className='h-1 w-16 bg-purple-600 rounded-full'></span>
                    </h1>
                    <div className='flex flex-col justify-start items-start gap-2 py-4'>
                        <li className='flex justify-start items-start text-sm font-bold gap-2'><IoIosArrowForward className='text-lg' /><a href="#home">Home</a></li>
                        <li className='flex justify-start items-start text-sm font-bold gap-2'><IoIosArrowForward className='text-lg' /><a href="#About">About</a></li>
                        <li className='flex justify-start items-start text-sm font-bold gap-2'><IoIosArrowForward className='text-lg' /><a href="#skills">Skills</a></li>
                        <li className='flex justify-start items-start text-sm font-bold gap-2'><IoIosArrowForward className='text-lg' /><a href="#service">Services</a></li>
                        <li className='flex justify-start items-start text-sm font-bold gap-2'><IoIosArrowForward className='text-lg' /><a href="#project">Projects</a></li>
                        <li className='flex justify-start items-start text-sm font-bold gap-2'><IoIosArrowForward className='text-lg' /><a href="#contact">Contact</a></li>

                    </div>
                </div>
                <div className='md:w-[20%] w-full   flex flex-col justify-start items-start gap-3'>
                    <h1 className='flex-col flex justify-between text-xl font-bold gap-3 text-purple-600'>Services
                        <span className='h-1 w-16 bg-purple-600 rounded-full'></span>
                    </h1>
                    <h3 className='font-semibold'> Frontend Development</h3>
                    <h3 className='font-semibold'>Responsive Web Design</h3>

                    <h3 className='font-semibold'>UI Implementation</h3>
                    <h3 className='font-semibold'>Website Optimization</h3>
                    <h3 className='font-semibold'>Website Maintainance</h3>

                </div>
                <div className='md:w-[20%] w-full flex flex-col justify-start items-start gap-6 '>
                    <h1 className='flex-col flex justify-between text-xl font-bold gap-3 text-purple-600'>Contact Me
                        <span className='h-1 w-16 bg-purple-600 rounded-full'></span>
                    </h1>

                    <li className='flex justify-start items-start text-sm font-bold gap-2'><MdEmail className='text-lg' /><a href="#home">alshafacoll246@gmail.com</a></li>
                    <li className='flex justify-start items-start text-sm font-bold gap-2'><FaPhoneAlt className='text-lg' /><a href="#About">8292054088</a></li>
                    <li className='flex justify-start items-start text-sm font-bold gap-2'><FaLocationDot className='text-lg' /><a href="#skills">India</a></li>
                    <a href="#" className='bg-purple-600 px-4 py-2 rounded-2xl font-bold'>Let's Talk</a>
                </div>
            </div>
            <div className='text-gray-400 flex lg:flex-row flex-col gap-2 justify-between items-center px-8 py-4 bg-gray-900'>
                <h2 cl>@2026 Shafaque. All rights reserverd</h2>
                <h2 className='text-sm flex flex-row justify-between items-center gap-1'>Built with <span className='text-red-700'> <FaHeart/> </span> using <span className='text-purple-600'> React TailwindCSS </span></h2>

            </div>

        </div>

    )
}

export default Footer
