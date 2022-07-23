import React,{useState} from 'react'



const Cards = ({data}) => {
  const [isActive, setIsActive] = useState(false);
  

  return (
    <>
    <div className='text-center'>
      {data.map((x, y) => (
        
          <div key={y} className='p-2 mt-4 bg-white rounded-[20px] '>
            <div className='flex justify-around p-2 mt-4 '>
                <p> HelloTravle </p>
                <div className='text-center'>
                  <h1>Name</h1>
                  <p>{x.name}</p>   
                </div>
                <div className='text-justify'>
                  <h1>BirthYear</h1>
                  <p> {x.birth_year} </p>
                </div>
                <div>
                  <h1>Gender</h1>
                  <p>{x.gender}</p>
                </div>
                
                <button 
                    onClick={() => {isActive.name === x.name ? setIsActive('') : setIsActive(x) }}
                    //onClick={() => { setIsActive(x) }}
                    className='bg-[red] text-white hover:bg-red-500 py-2 px-4 rounded-full'
                >
                  {isActive.name === x.name ? 'view less' : 'view more'}
                </button> 
            </div>
            {isActive.name === x.name 
              &&  <div className="bg-[#eee]  m-[2rem] p-[3rem] rounded-[20px] text-[black] text-justify block h-auto px-8  lg:text-[16px] ">{x.name},{x.birth_year}</div>
            }
          </div>
      ))}
    </div>
    


    </>
  )
}

export default Cards