import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './Header';

function App() {
  const [data, setData] = useState(null)
  const [dateInput, setDateInput] = useState('2023-01-01')
  const [showDate, setShowDate] = useState(false)
  const [showImage, setShowImage] = useState(true)

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=OBTkyKhEQeHyGV3oObYAaObQSeu5Ig4BpuaNudlP&date=${dateInput}`)
    .then(res => res.json())
    .then(data => {
      setData(data)
      setShowDate(true)
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [dateInput])

  function handleDateInputChange(event){
    setDateInput(event.target.value)
    setShowDate(false)
  }

  function handleButton() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=OBTkyKhEQeHyGV3oObYAaObQSeu5Ig4BpuaNudlP&date=${dateInput}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setShowDate(true);
        setShowImage(true);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div>
      <Header/>
      <div className='grid grid-cols-2 gap-4 mt-12 items-center'>
        <div className='border-2 p-4 m-12 bg-[#737484] hover:bg-[#d9d9de] bg-opacity-30 hover:bg-opacity-10 border-[#3a3a40] rounded shadow-lg hover:shadow-xl transition duration-300 text-[#eeeef0] h-1/2'>
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

    </div>
  )
}

export default App;


