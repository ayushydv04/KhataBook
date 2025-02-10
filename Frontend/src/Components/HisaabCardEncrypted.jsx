import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { EyeOff } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';


const HisaabCardEncrypted = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`flex flex-col ${theme === "dark" ? "bg-[#181a1b] border border-[#353a3c] hover:bg-[#2c2d2d]" : "bg-zinc-100 hover:bg-zinc-200" }  w-84 p-3 rounded-md`}>
        <div className='flex items-center pb-1 justify-between'>
          <div className='flex items-center'>

            <div className='flex bg-blue-500 w-22 rounded-md p-1 text-white items-center text-xs'>
                <p><LockKeyhole size={13} strokeWidth={3} /></p>
                <p className='pl-1'>Encryption</p>
            </div>
            <div className='w-5 h-5 p-0.5 ml-2 bg-gray-400 rounded-md flex items-center justify-center'> <EyeOff color='black' size={12}/>  </div>
          </div>
                
            <div className='spa'>
                <p className='text-xs  text-slate-500'>Created on 12-07-2024</p>
            </div>

        </div>
        <h4>Title</h4>
        <p className='text-xs text-slate-500 pt-3 cursor-pointer'>View Hisaab</p>
    </div>
  )
}

export default HisaabCardEncrypted
