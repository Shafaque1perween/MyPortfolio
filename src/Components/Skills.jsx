
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { FaArrowRight, FaCode } from 'react-icons/fa'
import SkillCard from './SkillCard'
import { FaLaptopCode, FaTools } from 'react-icons/fa'
import { RiAccountCircleLine } from "react-icons/ri";
import { GiOpenBook } from "react-icons/gi";
import { CiStar } from "react-icons/ci";
import Skillbtn from './Skillbtn';
import { FaHtml5 } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";



function Skills() {


    // const renderSkills = skill.map((item, index) => {
    //     return (
    //         <SkillCard key={index} name={item.name} icon={item.icon} tag1={item.tag1} tag2={item.tag2} tag3={item.tag3} tag4={item.tag4} tag5={item.tag5} />
    //     )
    // })

    // const renderBtn = btn.map((item, index) => {
    //     return (
    //         <Skillbtn key={index} name={item.name} icon={item.icon} />
    //     )
    // })
    return (
        <section className='  w-full h-full lg:px-20 px-6 py-2 lg:py-6 border-b border-b-purple-300 ' id='skills'>
            <div className=' h-full w-full gap-3 '>
                <div className='flex justify-center items-center gap-2'>
                    <span className='h-1 w-1 bg-purple-600 rounded-full'></span>
                    <span className='h-1 w-1 bg-purple-600 rounded-full'></span>
                    <span className='text-lg text-purple-600'><FaCode /></span>
                    <span className='h-1 w-1 bg-purple-600 rounded-full'></span>
                    <span className='h-1 w-1 bg-purple-600 rounded-full'></span>
                </div>
                <div className='flex flex-col justify-center items-center lg:gap-2 gap-1'>
                    <h1 className='lg:text-3xl text-2xl font-semibold '>Skills</h1>
                    <span className='h-1 w-8 bg-purple-600 rounded-full'></span>
                    <p className='text-center'>Here are the technologies and tools i use <br /> to build modern and responsive wev applications.</p>
                </div>
            </div>
            {/* <div className='flex justify-center items-center'>
                <div className='grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1  flex-row lg:justify-center justify-between items-center py-2 px-2  md:py-8 md:px-10   gap-3 md:gap-20 lg:gap-10'>
                    {renderSkills}
                </div>

            </div> */}
            <div className='flex justify-between items-center '>
                <div className='flex justify-end  p-5 mt-5 '>
                    <button className='custom-prev1 flex justify-center items-center text-zinc-800 text-2xl rounded-lg w-11 h-11 bg-zinc-100 hover:bg-purple-600 hover:text-white hover:cursor-pointer'>
                        <IoIosArrowBack />

                    </button>


                </div>
                <Swiper navigation={
                    {
                        nextEl: ".custom-next1",
                        prevEl: ".custom-prev1"
                    }
                }
                    loop={true}
                    breakpoints={{
                        340: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}


                    modules={[Navigation]} className="mySwiper">
                    {skill.map((item, index) => {
                        return (
                            <SwiperSlide className='flex justify-center items-center   py-6 '>

                                <SkillCard key={index} name={item.name} icon={item.icon} tag1={item.tag1} tag2={item.tag2} tag3={item.tag3} tag4={item.tag4} tag5={item.tag5} />

                            </SwiperSlide>

                        )
                    })}
                </Swiper>
                <div className='flex justify-end  p-5 mt-5 '>
                    <button className='custom-next1 flex  justify-center items-center text-zinc-800 text-2xl rounded-lg w-11 h-11 bg-zinc-100 hover:bg-purple-600 hover:text-white hover:cursor-pointer'>
                        <IoIosArrowForward />
                    </button>
                </div>

            </div>

            <div className='flex justify-center items-center gap-2 py-3 
            '>
                <span className='text-3xl text-purple-600 font-extrabold'><CiStar /></span>
                <h2 className='text-2xl font-bold'>Skills Overview</h2>
                <span className='text-3xl text-purple-600 font-extrabold'><CiStar /></span>
            </div>
            {/* <div className=' lg:px-10 px-10 '>
                <div className='  grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 flex-row justify-between md:gap-3 gap-6 items-center  '>
                    {renderBtn}
                </div>
            </div> */}
            <div className=' flex justify-center items-center  py-2 '>
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
                        340: { slidesPerView: 2, spaceBetween: 20 },
                        640: { slidesPerView: 4, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 20 },
                        1024: { slidesPerView: 6, spaceBetween: 20 },
                    }}


                    modules={[Navigation]} className="mySwiper">
                    {btn.map((item, index) => {
                        return (
                            <SwiperSlide className='flex justify-center items-center text-center '>

                                <Skillbtn key={index} name={item.name} icon={item.icon} />
                            </SwiperSlide>

                        )
                    })}
                </Swiper>

                <button className='custom-next2 flex justify-center items-center text-black px-6 rounded-lg   hover:text-purple-600  hover:cursor-pointer'>
                    <MdKeyboardArrowRight />

                </button>

                {/* <button className='custom-next flex justify-center items-center text-black px-6 rounded-lg   hover:text-purple-600  hover:cursor-pointer'>
                    <MdKeyboardArrowRight />

                </button> */}

            </div>




        </section >

    )
}

export default Skills

const skill = [
    {
        icon: FaLaptopCode,
        name: "Frontend Developer",
        tag1: "HTML5",
        tag2: "CSS3",
        tag3: "JavaScript(ES6+)",
        tag4: "React.js",
        tag5: "Tailwind CSS",
    },
    {
        icon: FaTools,
        name: "Tools & Technologies",
        tag1: "Git",
        tag2: "GitHub",
        tag3: "Vscode",
        tag4: "Vite",
        tag5: "Responsive Web Design",
    },
    {
        icon: GiOpenBook,
        name: "Current Learning ",
        tag1: "Next.js",
        tag2: "TypeScript",
        tag3: "Api Integration ",
        tag4: "Firebase",
        tag5: "Redux Toolkit",

    },
    {
        icon: RiAccountCircleLine,
        name: "Soft Skills",
        tag1: "Problem Solving",
        tag2: "Attention to Detail",
        tag3: "Team Collaboration",
        tag4: "Quick Learner",
        tag5: "Time Management",
    },

];

const btn = [
    {
        icon: FaHtml5,
        name: "html3",

    },
    {
        icon: FaHtml5,
        name: "CSS3",

    },
    {
        icon: FaHtml5,
        name: "JavaScript",

    },
    {
        icon: FaHtml5,
        name: "React.js",

    },
    {
        icon: FaLaptopCode,
        name: "Tailwind CSS",

    },
    {
        icon: FaLaptopCode,
        name: "Git",

    },
    {
        icon: FaLaptopCode,
        name: "GitHub",

    },
    {
        icon: FaLaptopCode,
        name: "VS Code",

    },
    {
        icon: FaLaptopCode,
        name: "HTML5",

    },
    {
        icon: FaLaptopCode,
        name: "Vite",

    },
    {
        icon: FaHtml5,
        name: "Responsive",

    },
    {
        icon: FaHtml5,
        name: "html",

    },

];
