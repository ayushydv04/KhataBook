import React from 'react'

const HisaabCardEncrypted = () => {
  return (
    <div className='flex flex-col bg-zinc-100 w-84 p-3 rounded-md'>
        <div className='flex justify-between items-center pb-1'>
            <div className='flex bg-blue-400 w-22 rounded-md p-1 text-white items-center text-xs'>
                <p>🔒</p>
                <p className='pl-1'>Encryption</p>
                <div className='ml-3 bg-gray-400 rounded-md'>👁️</div>
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

export default HisaabCardEncrypted
