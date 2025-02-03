import React from 'react'
import Profile from './Profile';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between m-5 items-center">
        <div className="text-3xl font-bold text-gray-700">
            Khatabook.com
        </div>
        <div>
            <ul className="flex gap-10 items-center">
                <li>Home</li>
                <li>Collaborative</li>
                <li>To</li>
                <div className="flex gap-2 cursor-pointer">
                    <li className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center"><MdOutlineLightMode /></li>
                    <li className="w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center"><MdOutlineDarkMode color="white"/></li>
                </div>
                <li><Profile/></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
