import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

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
        <LeftCard
        dateInput={dateInput}
        handleButton={handleButton}
        handleDateInputChange={handleDateInputChange}
        />
        <RightCard
        data={data}
        showImage={showImage}/>
      </div>

    </div>
  )
}

export default App;


