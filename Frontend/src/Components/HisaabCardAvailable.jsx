import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const HisaabCardAvailable = () => {

  const {theme} = useContext(ThemeContext);
  
// 181718
  return (
    <div className={`flex flex-col ${theme === "dark" ? "bg-[#181a1b] border border-[#353a3c] hover:bg-[#2c2d2d]" : "bg-zinc-100 hover:bg-zinc-200" }  w-84 p-3 rounded-md`}>
        <div className='flex justify-between items-center pb-1'>
            <div className='flex bg-green-500 w-20 rounded-md p-1 text-white items-center text-xs'>
                <p>✔️</p>
                <p className='pl-1'>Available</p>
                {/* <div className='ml-3 bg-gray-400 rounded-md'>👁️</div> */}
            </div>
            <div>
                <p className='text-xs text-slate-500'>Created on 12-07-2024</p>
            </div>

        </div>
        <h4>Title</h4>
        <p className='text-xs text-slate-500 pt-3 cursor-pointer'>View Hisaab</p>
    </div>
  )
}

export default HisaabCardAvailable


// Refer to pastes for specific file color in dark mode








