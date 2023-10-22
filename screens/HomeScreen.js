import { View, Text, ScrollView,TouchableOpacity, Image, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import Navbar from '../components/Navbar'
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList'


var {width, height} =Dimensions.get('window');

export default function HomeScreen() {
    const [trending, setTrending] = useState([1,2,3,4]);
    const [upcoming, setUpcoming] = useState([1,2,3,4]);
    const [topRated, setTopRated] = useState([1,2,3,4]);

    const movieName = "Avenger Endgame and the guardians";
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