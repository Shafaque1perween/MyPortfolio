import React from 'react'
import Heading from './Heading'
import { IoBagHandleOutline } from 'react-icons/io5'
import { TfiAgenda } from 'react-icons/tfi'
import Tag from './Tag'
import { FaRocket } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import ServiceCard from './ServiceCard'
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { CgPerformance } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";




const Service = () => {

    const renderTag = value.map((item, index) => {
        return (
            <Tag key={index} name={item.name} icon={item.icon} para={item.para} />
        )
    })
    const renderService = services.map((item, index) => {
        return(
        <ServiceCard key={index} icon={item.icon} name={item.name} para={item.para}/>
        )
    })

    const renderHeading = heading.map((item, index) => {
        return (
            <Heading key={index} name1={item.name1} name2={item.name2} icon={item.icon} head={item.head} para1={item.para1} para2={item.para2} />
        )
    })
    return (
        <div className=' flex flex-col justify-center items-center py-2  w-full h-auto px-4 border-b border-b-purple-300  ' id='service'>
            <div>
                {renderHeading}
            </div>

            <div className=' py-4  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-row justify-center items-center gap-6 z-3 '>
                {renderService}
            </div>


            <div className='hidden py-2 px-4 w-full lg:flex  border border-purple-300 rounded-2xl'>
                <div className='flex justify-between items-center  h-12 w-full  px-2 py-2 '>
                    {renderTag}

                </div>

            </div>

        </div>
    )
}

export default Service

const heading = [
    {
        icon: IoBagHandleOutline,
        name1: "Services I ",
        name2: "Offer",
        head: "WHAT I DO",
        para1: "I create modern, responsive, and user-friendly web applications ",
        para2: "with clean code and attention to detail.",

    },

];

const value = [
    {
        icon: RiShoppingBag4Line,
        name: 'Clean & Efficient Code',
        para: "Well structured code",
    },
    {
        icon: IoMdHappy,
        name: "Fast Delivery",
        para: "On-time delivery ",
    },
    {
        icon: FaRocket,
        name: "Fully Responsive ",
        para: "Looks perfect on all devices",
    },
    {
        icon: MdSupportAgent,
        name: "Support & Communication",
        para: "Clear communication & support",
    },
]
const services = [
    {
        icon: FaRocket,
        name: "Landing Page Development",
        para: "Modern, responsive,and high-converting landing pages built with React.js and tailwindCSS. ",
    },
    {
        icon: FaLaptopCode,
        name: "Frontend Web Development",
        para: "Clean,fast, and interactive websites using HTML,CSS,JavaScript,React.js, and TailwindCSS.",
    },{
        icon: FaMobileAlt,
        name: "Responsive Web Design",
        para: "Website that look and perform perfectly on desktop, table, and mobile devices.",
    },
    {
        icon: CgPerformance,
        name: "UI Implementation",
        para: "Transform Figma or design mockups into pixel-perfect,responsive web interfaces",
    },
    {
        icon: IoIosTimer,
        name: "Website Performance Optimization",
        para: "Improve website speed, loading time, and overall user experience for better performance.",
    },
    {
        icon: IoSettingsOutline,
        name: "Website Maintainance",
        para: "Bug fixes, UI improvements, feature updates, and going frontend support",
    },
    
]