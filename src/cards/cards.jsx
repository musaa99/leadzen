import React from 'react'


const expandDetails = (details) => {

}

const Cards = (props) => {
  const {data} = props;
  return (
    <>
      {data.map((x, y) => (
          <div key={y} className='flex justify-around p-2 mt-4 bg-white rounded-full '>
            <p> {x.name} </p>
            <div>
              <h1>Contact</h1>
              <p>{x.homeworld}</p>
              <div>
            </div>
              
            </div>
            <div>
              <h1>City</h1>
              <p> {x.eye_color} </p>
            </div>
            <div>
              <h1>Location</h1>
              <p>location contents</p>
            </div>
            <button 
                className='bg-[red] text-white hover:bg-red-500 py-2 px-4 rounded-full'
                onClick={() => {console.log(x)}}
            >
              view more
            </button> 
          </div>
      ))}

    </>
  )
}

export default Cards