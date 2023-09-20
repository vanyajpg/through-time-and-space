import React from 'react'

export default function RightCard({data, showImage}) {
  return (
    <div>
        <div className=' text-[#cddaea] mr-12'>
          {data && (
          <div className=''>
            <h2 className='text-center text-3xl mb-2'>{data.title}</h2>
            <div> {showImage && (
              <img src={data.hdurl} alt="APOD" className=' mx-auto rounded w-full h-[600px] border-2 border-[#3a3a40] shadow-md hover:shadow-2xl transition duration-300 '/> )}
            </div>

            {/* {showDate && ( // Conditional rendering for date description
              <h2>
                Description from{' '}
                {new Date(dateInput).toLocaleDateString('en-us', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </h2>
            )}
            <h3>{data.explanation}</h3> */}
          </div>
        )}
        </div>
    </div>
  )
}
