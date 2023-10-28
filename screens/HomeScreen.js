import { ScrollView, Dimensions } from 'react-native'
import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList'
import axios from  'axios'
import {trendingURI, upcomingURI, topRatedURI} from '../api/constants'


// var {width, height} =Dimensions.get('window');


export default function HomeScreen() {
    const [trending, setTrending] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);


    const queryOptions = {
     
      language: 'en-US', // You can change the language as needed
      page: 1, // Page number
    };
    

    //fetch trending movies and series from trending endpoint
    const getTrending = async()=>{
      try{
        const res = await axios.get(trendingURI,{options: queryOptions});
        // console.log("TRENDING", res.data.results);
        setTrending(res.data.results);
      }catch(error){
        console.log(error)
      };
    };
    
    //fetch upcoming movies from upcoming endpoint
    const getUpcoming = async()=>{
      try{
        const res = await axios.get(upcomingURI,{options: queryOptions});
        // console.log(res.data.results);
        setUpcoming(res.data.results);
      }catch(error){
        console.log(error)
      };
    };

    //fetch top rated movies from top rated endpoint
    const getTopRated = async()=>{
      try{
        const res = await axios.get(topRatedURI,{options: queryOptions});
        // console.log(res.data.results);
        setTopRated(res.data.results);
      }catch(error){
        console.log(error)
      };
    };

    useEffect(()=>{
      getTrending()
      getUpcoming()
      getTopRated()
    },[])

  return (
       <>
        <Navbar/> 
         <ScrollView
            showsVerticalScrollIndicator ={false } 
            contentContainerStyle ={{paddingBottom:10}}
            className="flex-1">
                <TrendingMovies data={trending} />
                <MovieList data={upcoming} title="Upcoming" />
                <MovieList data={topRated} title="Top Rated" />
           
        </ScrollView>
        </>
  )
}