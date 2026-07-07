import React from 'react'
import Heading from './Heading'
import { FaExternalLinkAlt, FaLaptop } from "react-icons/fa";
import profile from "../assets/profile.jpeg"
import Cards from './Cards';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { RiAccountCircle2Line } from "react-icons/ri";
import { TfiBag } from "react-icons/tfi";
import Tag from './Tag';
import { FaRocket } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";



const About = () => {

    const renderCards = details.map((item, index) => {
        return (
            <Cards key={index} name={item.name} icon={item.icon} para={item.para} />
        )
    })
    const renderTag = values.map((item, index) => {
        return (
            <Tag key={index} name={item.name} icon={item.icon} para={item.para} />
        )
    })
    return (

        <div className='  py-6 lg:px-20 px-8  flex flex-col justify-between w-full ' id='About'>

            {/* heading */}
            <div className='flex justify-center items-center text-center w-full h-8'>
                <h3 className='border rounded-full px-6 py-1 bg-purple-800 text-white font-semibold'>ABOUT ME</h3>
            </div>

            {/* about */}

            <div className=' flex justify-between items-start px-6 py-4 w-full h-full'>

                 <div className='hidden lg:flex h-70 w-1/3 px-6 py-4   justify-center items-center '>
                    <img src={profile} className='h-60 w-60 rounded-2xl border-purple-800 border-2' />

                </div>

                {/* left-section */}
                <div className=' flex flex-col justify-start items-start gap-1 lg:w-2/3 w-full   h-full  '>
                    <h1 className='text-3xl font-bold'>About<span className='text-purple-800'> Me</span></h1>
                    <div className='bg-purple-800 w-20 h-1 border-purple-800 rounded-full my-10'></div>
                    <div className=' w-full flex lg:hidden justify-center items-center text-center  h-80'>
                        <img src={profile} className='h-70 w-60 rounded-2xl border-purple-800 border-2 mb-6' />

                    </div>

                    <p className=''>I'm <span className='text-purple-800'>Shafaque</span>, a passionate Frontend Developer who enjoys creating modern, responsive, and user-friendly websites. I specialize in building clean and interactive web applications using <br />React, JavaScript, Tailwind CSS, HTML, and CSS.

                        I focus on writing clean, maintainable code and creating smooth user experiences across different devices. I enjoy learning new technologies and continuously improving my skills by building real-world projects.<br />

                        Some of my recent projects include a Gym Website, Grocery Store, and Notes App, where I applied responsive design, reusable components, and modern frontend development practices.<br />

                        I'm currently available for freelance opportunities and excited to work on projects that solve real-world problems and deliver great user experiences.</p>
                </div>
                {/*right- image section  */}
                {/* <div className='hidden lg:flex h-120 w-1/2 px-6 py-4   justify-end items-center'>
                    <img src={profile} className='h-120 w-90 rounded-2xl border-purple-800 border-2' />

                </div> */}
            </div>

          
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between items-center gap-6 lg:px-8 px-2   '>
                    {renderCards}
                </div>
        



            <div className='hidden py-4 px-6 w-full lg:flex  '>
                <div className='flex justify-between items-center h-12 w-full border border-purple-950 rounded-2xl px-2 py-2 shadow-2xl'>
                  {renderTag} 
         
                </div>

            </div>
        </div>



    )
}

export default About

const details = [
    {
        icon: FaLaptop,
        name: "Frontend Developer",
        para: "Building modern web applications",
    },
    {
        icon: FaReact,
        name: "React and javascript",
        para: "Creating interactive and dynamic UI",
    },
    {
        icon: RiTailwindCssFill,
        name: "Tailwind CSS",
        para: "Designing beautiful ,responsive interfaces",
    },
    {
        icon: FaCode,
        name: "Clean Code",
        para: "Writing maintainable and efficient code",
    },
    {
        icon: RiAccountCircle2Line,
        name: "Available for Work",
        para: "Open to freelance opportunities",
    },
];
const values =[
    {
        icon: RiShoppingBag4Line,
        name: '3+',
        para: "Project Completed",
    },
    {
        icon: IoMdHappy,
        name: "100%",
        para: "Cleint Satisfaction",
    },
    {
        icon: FaRocket ,
        name: "Fast",
        para: "On-Time Delivery",
    },
    {
        icon: FaRegHandshake ,
        name: "Freelancer",
        para: "Available for work",
    },
]