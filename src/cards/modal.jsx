import React from 'react'



const Modal = ({data}) => {
 
 

 
  return (
    
    <div className='text-center'>
      {data.map((x, y) => (
        
          <div key={y} className='flex justify-around p-2 mt-4 bg-white rounded-full '>
            
            <div className='text-center'>
              
              <p>{x}</p>   
            </div>
            
            
           
          </div>
      ))}

    </div>
  )
}

export default Modal