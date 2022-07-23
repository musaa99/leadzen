import { useState } from "react";
import React  from 'react';



const Display = ({ data }) => {
  const [expanded, setExpanded] = useState(false)
  const dataForDisplay = expanded ? data : data.slice()
  return (
      <div className="main-div">
        {dataForDisplay.map((event, index) => (
          <div key={index} className="flex justify-around p-2 mt-4 bg-white rounded-full ">
              <p> HelloTravle </p>
              <div className='text-center'>
              <h1>Name</h1>
              <p>{event.name}</p>   
            </div>
            <div className='text-justify'>
              <h1>BirthYear</h1>
              <p> {event.birth_year} </p>
            </div>
            <div>
              <h1>Gender</h1>
              <p>{event.gender}</p>
            </div>
        <button className='bg-[red] text-white hover:bg-red-500 py-2 px-4 rounded-full'
          onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'} 
        </button>
    
          </div>
        ))}
      </div>
  );
};



export default Display;