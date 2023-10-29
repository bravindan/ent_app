import { View, Text, ScrollView, TouchableOpacity, Platform, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, StarIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import {imageURI185, imageURI500} from '../api/constants'
import { APIKey } from '@env';


const ios = Platform.OS === 'ios';
var {width, height} = Dimensions.get('window');
const topMargin = ios? "":"mt-3";

export default function SeriesDetailsScreen() {
    const [series, setSeries] =  useState([]);
    const [cast, setCast] =  useState([]);

    const {params:item} = useRoute();
    const navigation = useNavigation();
    
    const bgc =['transparent','rgba(200,200,200,0.8)', 'rgba(200,200,200,0.9)'];

//get series details
    const getSerieDetails =async (id) =>{
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${APIKey}`);
            // console.log("SERIES DETAILS",res.data);
            setSeries(res.data);
        }catch(error){
            console.log(error.message)
        }

    }
//get cast members
    const getSerieCast =async (id) =>{
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${APIKey}`);
            // console.log("SERIES Cast DETAILS",res.data.cast);
            setCast(res.data.cast);
        }catch(error){
            console.log(error.message)
        }

    }
    useEffect(() =>{
        getSerieDetails(item.id); 
        getSerieCast(item.id); 
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
                    source ={{uri: `${imageURI500}${series?.poster_path}`}}
                    style ={{width, height:height*0.68}} 
                    />
                <LinearGradient
                    colors={['transparent','rgba(200,200,200,0.8)', 'rgba(200,200,200,0.9)']}
                    // colors={['transparent','#171717CC', '#171717FF']}
                    // colors={['transparent','rgba(23,23,23,0.8)','rgba(23,23,23,0.8)']}
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
                {series.name}
            </Text>
            <View className="flex-col">
                <Text className="text-neutral-600 font-semibold  mx-4">
                    {series?.status}◦ First air date: {series.first_air_date}
                </Text>
                <Text className="text-neutral-600 font-semibold  mx-4">
                    Seasons: {series.number_of_seasons}◦ Episodes: {series.number_of_episodes}◦ Ep runtime: {series?.episode_run_time}min
                </Text>
            </View>
            <View className="flex-row mx-4">
                <Text className="text-neutral-900 font-semibold">Genre: </Text>
                
                <Text className="text-neutral-600 font-semibold  text-center">
                    {
                    series.genres?.map((genre)=>(
                    <Text key={genre.id} className="">{genre.name} ◦ </Text> )                       
                        )
                    }
                </Text>
                
            </View>
                <Text className="text-orange-600 font-semibold text-start mx-4">Vote Avg: {Math.round(series.vote_average*10)/10}</Text> 
            <View>
                <Text className="mx-4 text-neutral-900 font-semibold">
                    Overview:
                    {series.tagline}
                </Text>
                <Text className=" tracking-tighter mx-4 text-neutral-600">
                {series.overview}
                </Text>
                {/* <Text>{movie?.homepage}</Text> */}
            </View>
        </View>
        
            {/* cast */}
            <View className="mt-4">
                <Text className="mx-4 text-neutral-900 font-semibold mb-2">
                    Cast:
                </Text>
                <ScrollView horizontal className="tracking-tighter mx-4 text-neutral-600">
                    {
                    cast?.map((character)=>(
                        <View key={character.id} className="flex-col items-center">
                            <Image source={{uri:`${imageURI185}${character.profile_path}`}} style={{width:40, height:40}} className="rounded-full"/>
                            <Text className="mx-2 text-xs">{character.original_name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
        
        
    </ScrollView>
  )
}