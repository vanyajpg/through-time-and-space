import React from 'react'

export default function LeftCard({dateInput, handleDateInputChange}) {
  return (
    <div className='lg:h-screen md:mt-8 mt-4 flex items-start justify-center  '>
        <div className='lg:m-12 md:m-18 border-2 p-8 bg-[#737484]  bg-opacity-20 hover:bg-opacity-10 border-[#3a3a40] border-opacity-75 rounded shadow-lg hover:shadow-xl transition duration-300 text-[#eeeef0] w-9/12 '>
          <h3 className='text-center text-[#cddaea] text-3xl font-bold capitalize my-4'>enter your date</h3>
          <div className='flex flex-col items-center lg:space-y-4 mg:space-y-8 space-y-4  mb-6'>
            <input 
              type ="date" 
              value={dateInput} 
              onChange={handleDateInputChange}
              className="text-[#455a84] rounded w-1/2 mt-4 focus:outline-none focus:ring focus:border-[#3a3a40] focus:ring-[#3a3a40]"
              />
            <button className="text-sm font-semibold bg-[#cddaea] hover:bg-[#455a84] bg-opacity-75 hover:bg-opacity-75 text-[#35547e] hover:text-[#cddaea] transition duration-500 rounded lg:w-32 md:w-24 w-16 lg:h-12 md:h-10 h-16 capitalize ">explore <br></br>the universe</button>
          </div>
        </div>
    </div>
  )
}
