import { View, Text, ScrollView, TouchableOpacity, Platform, Dimensions, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, StarIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import {imageURI500, imageURI185} from '../api/constants'
import { APIKey } from '@env';
import Trailer from '../components/Trailer';



const ios = Platform.OS === 'ios';
var {width, height} = Dimensions.get('window');
const topMargin = ios? "":"mt-3";

export default function MovieDetailsScreen() {
    const [movie, setMovie] =  useState([]);
    const [cast, setCast] =  useState([]);
    const [videoKey, setVideoKey] =  useState([]);
    const trailerURL =`https://www.youtube.com/watch?v=${videoKey}`;

    const {params:item} = useRoute();
    const navigation = useNavigation();
    
    const bgc =['transparent','rgba(200,200,200,0.8)', 'rgba(200,200,200,0.9)'];

    //get movie details
    const getMovieDetails =async (id) =>{
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`);
            // console.log("DETAILS",res.data);
            setMovie(res.data);
        }catch(error){
            console.log(error.message)
        }

    }
    //getting cast information
    const getMovieCast =async (id) =>{
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKey}`);
            // console.log("DETAILS",res.data);
            setCast(res.data.cast);
        }catch(error){
            console.log(error.message)
        }

    }
   //getting videos
    const getTrailers = async(id) => {
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKey}`);
            // console.log(res.data.results);
            setVideoKey(res.data.results[0].key);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        getMovieDetails(item.id);  
        getMovieCast(item.id);
        getTrailers(item.id);
    },[])


  return (
    <ScrollView
        contentContainerStyle={{paddingBottom:20}}
         className="flex-1"
         style={{backgroundColor:'rgba(200,200,200,1)'}}
         >
        <View className="w-full ">
            <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4"+topMargin}>
                <TouchableOpacity onPress={()=>navigation.goBack()} className="rounded-xl p-1">
                    <ChevronLeftIcon size ="28" strokeWidth={2.5} color="orange"/>
                </TouchableOpacity>
                <TouchableOpacity className="rounded-xl p-1">
                    <StarIcon size ="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
            </SafeAreaView>
           
            <View>
                <Image 
                    source ={{uri: `${imageURI500}${movie?.poster_path}` ||`${imageURI500}${movie?.backdrop_path}`}}
                    style ={{width, height:height*0.68}} 
                    />
                <LinearGradient
                    colors={['transparent','rgba(200,200,200,0.8)', 'rgba(200,200,200,0.9)']}
                    style={{width, height:height*0.40}}
                    start={{x:0.5, y:0}}
                    end={{x:0.5, y:1}}
                    className="absolute bottom-0"
                    />

            </View>
            {/* movie details */}
        <View style={{marginTop:-(height*0.09)}} className="space-y-2">
        <LinearGradient
                    colors={['transparent','rgba(200,200,200,0.8)', 'rgba(200,200,200,0.9)']}
                    style={{width, height:height*0.35}}
                    start={{x:0.5, y:0}}
                    end={{x:0.5, y:1}}
                    className="absolute bottom-0"
                    />
            <Text className="text-neutral-900 text-center- text-2xl font-bold mx-4 tracking-wider">
                {movie.title}               
            </Text>
            <Text>
                <Trailer trailerURL={trailerURL}/>
            </Text>

            <Text className="text-neutral-600 font-semibold  mx-4">
                {movie?.status} ◦{movie.release_date} ◦ {movie.runtime} min
            </Text>
            <View className="flex-row mx-4">
                <Text className="text-neutral-900 font-semibold">Genre: </Text>
                
                <Text className="text-neutral-600 font-semibold text-center">
                    {
                    movie.genres?.map((genre)=>(
                    <Text key={genre.id} className="">{genre.name} ◦ </Text> )                       
                        )
                    }
                </Text>
                
                <Text className="text-orange-600 font-semibold text-center">{Math.round(movie.vote_average*10)/10}</Text> 
            </View>
            <View>
                <Text className="mx-4 text-neutral-900 font-semibold">
                    Overview: {" "}               
                </Text>
                <Text className=" tracking-tighter mx-4 text-neutral-600 mb-2">
                {movie.overview}
                </Text>
                <Text className="mx-4 text-neutral-900 font-semibold">
                    Tagline: {" "}               
                </Text>
                <Text className="text-xs italic mx-4"> {movie.tagline}</Text> 
                {/* <Text>{movie?.homepage}</Text> */}
            </View>
        </View>
            {/* cast */}
            <View className="mt-4">
                <Text className="mx-4 text-neutral-900 font-semibold">
                    Cast:
                </Text>
                <ScrollView horizontal className="tracking-tighter mx-4 text-neutral-600">                                                   
                {
                    cast?.map((character, index)=>(
                        <View key={index} className="flex-col items-center">
                            <Image source={{uri:`${imageURI185}${character.profile_path} `}} style={{width:40, height:40}} className="rounded-full"/>
                            <Text className="mx-2 text-xs">{character.original_name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
        
    </ScrollView>
  )
}