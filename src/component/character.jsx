import React from "react";

const Character = ({ name, birthYear, homeworld }) => {
//   console.log(homeworld)

  return (
    <div className="">
      <h3 >  {name}</h3>
      <p > {birthYear}</p>
      <p className="text-[red]">{homeworld}</p>
      
    </div>
  );
};

export default Character;
