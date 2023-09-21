import React, { useState } from 'react'
import ReactCardFlip from "react-card-flip";


export default function RightCard({data, showImage, showDate, dateInput}) {
        const [flip, setFlip] = useState(false);

  return (
    <div className='border-2 border-purple-500 mt-12 '>
        <div className=' text-[#cddaea] m-12 p-4'>
          {data && (
            <ReactCardFlip isFlipped={flip}
                flipDirection="vertical">
                <div className='text-center'>
                    <div> {showImage && (
                        <img src={data.hdurl} alt="APOD"
                            className=' mx-auto rounded w-full h-[500px] border-2 border-[#3a3a40] shadow-md hover:shadow-2xl transition duration-300 ' />
                        )}
                    <h2 className='text-center text-3xl mb-2 mt-8'>{data.title}</h2>

                    </div> 
                    <br />
                    <br />
                    <button className='bg-[#737484] hover:bg-[#d9d9de] bg-opacity-30 hover:bg-opacity-10 px-12 py-2 rounded transition duration-300' onClick={() => setFlip(!flip)}>
                        Flip</button>
                </div>
                <div>
                {/* {showDate && ( 
                <h2 className='text-red-500 font-bold'>
                    Description from{' '}
                    {new Date(dateInput).toLocaleDateString('en-us', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    })}
                </h2>
                )} */}
                    <div className=' w-full text-center'>
                        <p className="text-lg">{data.explanation}</p>
                        <br />
                        <button className=' text-lg bg-[#737484] hover:bg-[#d9d9de] bg-opacity-30 hover:bg-opacity-10 px-12 py-2 rounded transition duration-300' onClick={() => setFlip(!flip)}>
                            Flip
                        </button>
                    </div>
                </div>
            </ReactCardFlip>
        )}
        </div>
    </div>
  )
}