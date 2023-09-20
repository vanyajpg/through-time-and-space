import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null)
  const [dateInput, setDateInput] = useState('')

  function handleButton(){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=OBTkyKhEQeHyGV3oObYAaObQSeu5Ig4BpuaNudlP&date=${dateInput}`)
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  function handleDateInputChange(event){
    setDateInput(event.target.value)
  }


  return (
    <div>
      <h1>explore the universe</h1>
      <h3>enter your date</h3>

      <input 
      type ="date" 
      value={dateInput} 
      onChange={handleDateInputChange}
      />

      <button onClick={handleButton}>explore</button>

      {data && (
      <div>
        <h2>{data.title}</h2>
        <img src={data.hdurl} alt="APOD" width="500px" height="500px" />
        <h2>Description from {(dateInput)}</h2>
        <h3>{data.explanation}</h3>
      </div>
      )}

    </div>
  )
}

export default App;

// ===========================
// ===========================



// ===========================
// ===========================

