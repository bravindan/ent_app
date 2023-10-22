import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Movies from '../components/Movies'

export default function SeriesScreen() {
  const [series, setSeries]= useState([1,2,3]);
  return (  
        <Movies data={series}/>   
  )
}