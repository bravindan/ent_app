import {
    View, TextInput,
   TouchableOpacity,
    Text, FlatList,
    TouchableWithoutFeedback,
    Dimensions,
    Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { searchURI,topSearchURI, imageURI185 } from '../api/constants'
import axios from 'axios'
import { APIKey } from '@env';

var {width, height} =Dimensions.get('window');

export default function SearchScreen({data}) {
    const [result, setResult] = useState([])
    const [topSearch, setTopSearch] = useState([])
    const [searchTerm, SetSearchTerm] = useState("");

    const navigation = useNavigation();

    const searchMovie = async () => {
        try{
            const res = await axios.get(`${searchURI}?query=${searchTerm}&api_key=${APIKey}`);
            setResult(res.data.results);
            // console.log("SEARCH RESULTS==",res.data.results);
        }catch(e){
            console.log(e);
        }
    }


    const getTopSearch = async () => {
        try{
            const res = await axios.get(topSearchURI);
            setTopSearch(res.data.results);
            // console.log("TOPSEARCH==",res.data.results);
        }catch(e){
            console.log(e);
        }

    }

    useEffect(()=>{
        searchMovie();
        getTopSearch();
    },[searchTerm]);

    const handleClick = (item) => {
        navigation.navigate('MovieDetails', item);
      };

    const _renderItem = ({item}) =>
    (
      <MovieCard item={item} handleClick={handleClick}/>
    )
  return (
   
        <SafeAreaView className="flex-1 p-1" >
            <View className="mx-2 mb-3 flex-row border border-neutral-500 rounded-full justify-between">
                <TextInput
                    placeholder='Search Movie'
                    placeholderTextColor='gray'
                    className="pb-1 pl-4 flex-row text-base font-semibold"
                    onChangeText={(text) => SetSearchTerm(text)}
                />
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}
                    className="rounded-full p-3 m-1 bg-neutral-500 ">
                    <XMarkIcon size={20} color='white' />
                </TouchableOpacity>
            </View>

            {/* results */}
            
            {searchTerm.length == 0? (
                <View className="flex-1">
                    <Text className="mb-1 pl-2 font-semibold text-gray-500">Top Search</Text>
                        <FlatList 
                            data={topSearch}
                            renderItem={_renderItem}
                            keyExtractor={(item) => item.id} 
                            className="p-2"               
                        />
                 </View>
                 ) :(
                 <View className="flex-1">
                    <Text className="font-semibold text-base"> Results for <Text className="text-sm italic text-blue-400">{searchTerm}</Text> ({result.length})</Text>                    
                        <FlatList 
                            data={result}
                            renderItem={_renderItem}
                            keyExtractor={(item) => item.id}                
                        />
                 </View>)}
                       
        </SafeAreaView>
    
  )
}
const MovieCard = ({item, handleClick}) =>{
    return(
        <TouchableWithoutFeedback
            onPress = {()=>handleClick(item)}
            className=""
            >
                <View className="flex-row mx-2 p-1 bg-neutral-200 mb-1">
                    <Image                    
                    source={{uri:`${imageURI185}${item?.poster_path}`}}
                    style ={{width: width*0.3, height: height*0.15}}
                    className="rounded-md m-1"
                     />
                     <View className="p-2 bg-neutral-200 w-full rounded-md ">
                        <Text className="text-sm font-bold overflow-hidden whitespace-normal ">{item.title}</Text>
                        <Text className="text-sm text">{item.release_date}</Text>
                         <View className="text-base text">
                            <Text className="text-xs">Original Language:{item.original_language=="en"? "English":"n/a"}</Text>
                         </View>
                     </View>
                </View>                
        </TouchableWithoutFeedback>
    )
  }