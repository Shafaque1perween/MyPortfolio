import React, { useState } from 'react'
import { FiMail } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { IoCodeSlash} from "react-icons/io5";



const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    // const [activeTab, setActiveTab] = useState("home");
     

    const toggleMenu = (e) => {
        e.preventDefault()


        setShowMenu(!showMenu)
    }
    return (
        <div>
            <div className='fixed z-50 top-0 left-0 bg-purple-950 shadow-2xl w-full  h-16 flex justify-center items-center text-center lg:px-8 px-5 py-1 lg:gap-15 gap-10 md:gap-18 text-white'>
                <div className='flex flex-1  justify-items-start items-center text-center gap-3'>
                    <div className=' bg-purple-800 md:w-10 md:h-10 w-11 h-10 rounded-full flex justify-center items-center'>
                         <IoCodeSlash  className='text-white font-semibold text-xl'/>
                    </div>
                    <div>
                        <h1 className=' font-semibold lg:text-xl text-lg'><span className='text-purple-800'>Shafaque</span> Perween</h1>

                    </div>

                </div>

                <ul className={`hidden lg:flex flex-1 justify-between gap-1`}>
                    <li className=' hover:text-purple-800 py-4 px-2 hover:border-b hover:border-purple-800 '>
                        <a href='#home'>Home</a>
                    </li>
                    <li className='  hover:text-purple-800 py-4 px-2 hover:border-b hover:border-purple-800 '>
                        <a href='#About'>About</a></li>
                    <li className='  hover:text-purple-800 py-4 px-2 hover:border-b hover:border-purple-800'>
                        <a href='#skills'>Skills</a>
                    </li>
                    <li className=' hover:text-purple-800 py-4 px-2 hover:border-b hover:border-purple-800 '>
                        <a href='#project'>Projects</a> 
                    </li>
                    <li className='  hover:text-purple-800 py-4 px-2 hover:border-b hover:border-purple-800 '>
                        <a href='#service'>Services</a>
                    </li>
                     <li className='  hover:text-purple-800 py-4 px-2 hover:border-b hover:border-purple-800 '>
                        <a href='#contact'>Contact</a>
                    </li>

                </ul>
                <a href="mailto:alshafacoll246@gmail.com" className='flex  text-lg font-semibold  bg-purple-600 rounded-xl lg:px-4 px-2 lg:py-1 py-1  hover:bg-purple-900'>Hire Me</a>

                <a href='' className='flex lg:hidden text-2xl font-bold hover:text-purple-800 ' onClick={toggleMenu}>{showMenu ? <IoCloseSharp /> : <BiMenu />}</a>



            </div>
            {/* mobile menu */}
            <div className={`flex lg:hidden flex-col gap-y-2 items-center gap-x-2 absolute bg-purple-200  text-purple-600 backdrop:blur-2xl shadow-lg rounded-xl p-5 w-80 top-15 -left-1/2 transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>

                <ul className=' justify-center items-center text-center gap-5'>
                    <li className='text-lg font-semibold hover:text-purple-800 py-6 px-4  '>
                        <a href='#'>Home</a>
                    </li>
                    <li className='text-lg font-semibold hover:text-purple-800 py-6 px-4  '>
                        <a href='#'>About</a>
                    </li>
                    <li className='text-lg font-semibold hover:text-purple-800 py-6 px-4  '>
                        <a href='#'>Skills</a>
                    </li>
                    <li className='text-lg font-semibold hover:text-purple-800 py-6 px-4 '>
                        <a href='#'>Projects</a>
                    </li>
                    <li className='text-lg font-semibold hover:text-purple-800 py-6 px-4'>
                        <a href='#'>Contact</a>
                    </li>
                    <li>
                        <a href='/public/Shafaque Perween_.pdf' download className='mt-30 lg:hidden flex gap-3 px-4 py-3  text-purple-600 hover:bg-purple-900 hover:text-white rounded-2xl  font-bold text-lg  '>Download Cv<span className='mt-2 text-2xl'><LuDownload /></span></a>
                    </li>
                    

                </ul>

            </div>
        </div>




    )
}

export default Navbar
