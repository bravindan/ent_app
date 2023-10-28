
import React, { useState, useEffect } from 'react'
import Series from '../components/Series'
import { APIKey } from '../api/constants';
import axios from 'axios';

export default function SeriesScreen() {

  const [series, setSeries]= useState([]);


  const getSeries = async () => {

    try{
      const res = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${APIKey}`)
      // console.log("DiscoverTV", res.data.results); 
      setSeries(res.data.results);
    }catch(error){
      console.log(error);
     }
  }

  useEffect(()=>{
    getSeries();
  })

  return (  
        <Series data={series}/>   
  )
}