import axios from "axios";
import React, { useState, useEffect } from "react";
// import Display from "../cards/display";
 import Cards from "../cards/cards";






const Main = () => {
  const [results, setResults] = useState([]);

  
  const performLookup = async () => {
    const {data} = await axios.get(
      `https://swapi.dev/api/people`);
    setResults(data.results);
  };

  
  useEffect(() => {
    performLookup();
  }, []);

  return (
    <>
     <Cards data={results}></Cards> 
    {/* <Display data= {results}/> */}
    
    
    </>
  )
};

export default Main;
