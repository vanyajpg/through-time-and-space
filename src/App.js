import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

function App() {
  const [data, setData] = useState(null)
  const [dateInput, setDateInput] = useState('2023-01-01')
  const [showImage, setShowImage] = useState(true)

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=OBTkyKhEQeHyGV3oObYAaObQSeu5Ig4BpuaNudlP&date=${dateInput}`)
    .then(res => res.json())
    .then(data => {
      setData(data)
      setShowImage(true)
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [dateInput])

  function handleDateInputChange(event){
    setDateInput(event.target.value)
  }


  return (
    <div>
      <Header/>
      <div className='lg:grid lg:grid-cols-2 lg:gap-4 lg:m-8'>
        <LeftCard
        dateInput={dateInput}
        handleDateInputChange={handleDateInputChange}
        />
        <RightCard
        data={data}
        showImage={showImage}
        />
      </div>

    </div>
  )
}

export default App;


