import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from "../cards/cards";
import Character from "./character";





const Main = () => {
  const [results, setResults] = useState([]);

  // perform the search with the api
  const performLookup = async () => {
    const {data} = await axios.get(
      `https://swapi.dev/api/people`);
      

    setResults(data.results);
    console.log("mmm",data)
    
  };

  // run the query
  useEffect(() => {
    performLookup();
  }, []);

  return (
    <Cards data={results} />
  )
};

export default Main;
