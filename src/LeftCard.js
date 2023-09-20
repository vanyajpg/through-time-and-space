import React from 'react'

export default function LeftCard({dateInput, handleDateInputChange,handleButton}) {
  return (
    <div className=' h-screen'>
        <div className=' m-12 border-2 p-8 bg-[#737484] hover:bg-[#d9d9de] bg-opacity-30 hover:bg-opacity-10 border-[#3a3a40] rounded shadow-lg hover:shadow-xl transition duration-300 text-[#eeeef0] h-1/2'>
          <h3 className='text-center text-[#cddaea] text-3xl font-bold capitalize mt-4'>enter your date</h3>
          <div className='flex flex-col items-center space-y-16 mt-16'>
            <input 
              type ="date" 
              value={dateInput} 
              onChange={handleDateInputChange}
              className="text-[#626eae] rounded w-1/2"
              />
            <button onClick={handleButton} className="bg-[#cddaea] hover:bg-[#3b608e] text-[#35547e] hover:text-[#cddaea] transition duration-500 rounded w-1/3 h-12 ">explore</button>
          </div>
        </div>
    </div>
  )
}
