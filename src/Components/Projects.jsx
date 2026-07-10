import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// import required modules
import Heading from './Heading'
import { IoBagHandleOutline } from 'react-icons/io5'
import ProjectCard from './ProjectCard'
import gym from "../assets/gym.png"
import grocery from "../assets/grocery.png"
import { FaDumbbell } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLocalGroceryStore } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



function Projects() {

    // const renderCards = project.map((item, index) => {
    //     return (
    //         <ProjectCard key={index} image={item.image} icon={item.icon} icon2={item.icon2} icon3={item.icon3} name1={item.name1} name2={item.name2} para={item.para} tag1={item.tag1} tag2={item.tag2} tag3={item.tag3} link1={item.link1} link2={item.link2} />
    //     )
    // })
    return (
        <section className='flex flex-col justify-center items-center gap-2 px-4  py-4 border-b border-b-purple-300 ' id='project'>
            <div className='py-3'>
                <Heading name1="Featured" name2="Projects" head="My Work" icon={IoBagHandleOutline} para1="Here are some of the project which have i worked on." para2="Each project is buit with attention to detail and a focus on user experience." />

            </div>
            {/* <div className='px-12 py-4 rounded-2xl lg:gap-4 gap-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2  justify-between items-center '>
                {renderCards}
            </div> */}
            <div className=' flex justify-center items-center  py-2 w-full '>
                <button className='custom-prev2 flex justify-center items-center text-black px-6 rounded-lg text-lg   hover:text-purple-600  hover:cursor-pointer'>
                    <MdKeyboardArrowLeft />

                </button>




                <Swiper navigation={
                    {
                        nextEl: ".custom-next2",
                        prevEl: ".custom-prev2"
                    }
                }
                    loop={true}
                    breakpoints={{
                      
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}


                    modules={[Navigation]} className="mySwiper">
                    {project.map((item, index) => {
                        return (
                            <SwiperSlide className='flex justify-center items-center  gap-2  px-8'>

                                <ProjectCard key={index} image={item.image} icon={item.icon} icon2={item.icon2} icon3={item.icon3} name1={item.name1} name2={item.name2} para={item.para} tag1={item.tag1} tag2={item.tag2} tag3={item.tag3} link1={item.link1} link2={item.link2} />                                        </SwiperSlide>

                        )
                    })}
                </Swiper>

                <button className='custom-next2 flex justify-center items-center text-black px-6 rounded-lg   hover:text-purple-600  hover:cursor-pointer'>
                    <MdKeyboardArrowRight />

                </button>

                

            </div>
            <div className='  flex justify-center items-center  shadow-2xl border border-purple-300 lg:w-80  w-70  h-10  px-2 py-1 rounded-full gap-3 text-purple-800 top-2.5 font-semibold '>
                <FaGithub />
                <h2 className='text-sm'>View More Project on GitHub</h2>
                <FaArrowRight />

            </div>

        </section>
    )
}

export default Projects

const project = [
    {
        image: gym,
        icon: FaDumbbell,

        name1: 'Gym Website',
        name2: 'Tech Stack:',
        para: 'A modern and responsive fitness website to showcase gym services, membership plans, trainers, and workout programs',
        tag1: "HTML",
        tag2: "TailwindCSS",
        tag3: "JavaScript",
        link1: 'https://gym-web-ivory-eta.vercel.app',
        link2: "https://github.com/Shafaque1perween/gym-web",
    },
    {
        image: grocery,
        icon: MdLocalGroceryStore,
        name1: 'Grocery Website',
        name2: 'Tech Stack:',
        para: 'A modern and responsive Grocery Store Website built with React, Tailwind CSS, React Router DOM and Swiper.js.',
        tag1: " React.js",
        tag2: "TailwindCSS",
        tag3: "JavaScript",
        link1: 'https://grocery-puce-two.vercel.app/',
        link2: "https://github.com/Shafaque1perween/Grocery",
    },
    {
        image: grocery,
        icon: FaDumbbell,
        name1: 'Gym Website',
        name2: 'Tech Stack:',
        para: 'A modern and responsive fitness website to showcase gym services, membership plans, trainers, and workout programs',
        tag1: "HTML",
        tag2: "TailwindCSS",
        tag3: "JavaScreipt",
        link1: 'https://grocery-puce-two.vercel.app/',
        link2: "https://github.com/Shafaque1perween/Grocery",
    },
    {
        image: grocery,
        icon: FaDumbbell,
        name1: 'Gym Website',
        name2: 'Tech Stack:',
        para: 'A modern and responsive fitness website to showcase gym services, membership plans, trainers, and workout programs',
        tag1: "HTML",
        tag2: "TailwindCSS",
        tag3: "JavaScreipt",
        link1: 'https://grocery-puce-two.vercel.app/',
        link2: "https://github.com/Shafaque1perween/Grocery",
    },
]
