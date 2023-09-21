import React, { useState } from 'react'
import ReactCardFlip from "react-card-flip";


export default function RightCard({data, showImage, showDate, dateInput}) {
        const [flip, setFlip] = useState(false);

  return (
    <div className='mx-6 mt-12 lg:mt-0'>
        <div className=' text-[#cddaea] p-2 '>
          {data && (
            <div>
                <div>
                    <h2 className='text-center text-3xl text-[#cddaea] font-semibold m-4 transform hover:scale-110 transition duration-500 '>{data.title}</h2> 
                </div>
                
                <ReactCardFlip isFlipped={flip}
                    flipDirection="vertical">
                    <div className='text-center'>
                        <div> {showImage && (
                            <>
                            <img src={data.hdurl} alt="APOD"
                                className=' mx-auto rounded w-full h-[500px] border-2 border-[#3a3a40] border-opacity-50 shadow-md hover:shadow-2xl transition duration-300 ' />
                                className=' mx-auto rounded w-full h-[500px] border-2 border-[#3a3a40] border-opacity-40 hover:border-opacity-60 shadow-md hover:shadow-2xl transition duration-500 ' />
                            </>
                            )}

                        </div> 
                        <br />
                        <br />
                        <button className='bg-[#737484] hover:bg-[#d9d9de] bg-opacity-30 hover:bg-opacity-10 px-12 py-2 rounded-full transition duration-300 mb-8 font-semibold tracking-wider uppercase' onClick={() => setFlip(!flip)}>
                            Flip</button>
                    </div>
                    <div className=''>
                        <div className=' w-full text-center'>
                            <p className="text-lg pt-2">{data.explanation}</p>
                            <br />
                            <button className=' text-lg bg-[#737484] hover:bg-[#d9d9de] bg-opacity-30 hover:bg-opacity-10 px-12 py-2 rounded-full transition duration-300 mb-8 font-semibold tracking-wider uppercase' onClick={() => setFlip(!flip)}>
                                Flip
                            </button>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        )}
        </div>
    </div>
  )
}