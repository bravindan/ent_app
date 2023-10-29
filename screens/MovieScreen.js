
import React, { useEffect, useState } from "react";
import Movies from "../components/Movies";
import axios from "axios";
import { APIKey } from '@env';

export default function MovieScreen() {
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    try{
      const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}`)
      // console.log("Discover", res.data.results); 
      setMovies(res.data.results);
    }catch(error){
      console.log(error);
     }
  }
  useEffect(()=>{
    getMovies();
  })

  return (
   <Movies data={movies}/>
  );
}
