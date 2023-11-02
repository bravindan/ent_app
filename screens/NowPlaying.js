import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {APIKey} from '@env'
import Movies from "../components/Movies";


export default function NowPlaying() {
 const [nowplaying, setNowPlaying] =useState([]);

 const getNowPlaying = async() => {
  try{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}`)
    // console.log("NOW PLAYING LIST:::", res.data.results);
    setNowPlaying(res.data.results)
  }catch(e){
    console.log(e);
  }
 }

 useEffect(()=>{
  getNowPlaying()
 },[]);

  return (
    <View className="flex-1">
      <Movies data={nowplaying}/>      
    </View>
  )
}