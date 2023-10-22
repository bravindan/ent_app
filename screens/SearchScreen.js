import {
    View, TextInput,
    ScrollView,TouchableOpacity,
    Text, FlatList,
    TouchableWithoutFeedback,
    Dimensions,
    Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
// import MovieCard from '../components/TrendingMovies'

var {width, height} =Dimensions.get('window');

export default function SearchScreen({data}) {
    const [result, setResult] = useState([1,2,3])
    const [topSearch, setTopSearch] = useState([1,2,3,4,5,6,7])
    const [searchTerm, SetSearchTerm] = useState("");

    const navigation = useNavigation();

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
                            keyExtractor={item => item.id} 
                            className="p-2"               
                        />
                 </View>
                 ) :(
                 <View className="flex-1">
                    <Text className="font-semibold text-base"> Results for <Text className="text-sm italic text-blue-400">{searchTerm}</Text> ({result.length})</Text>                    
                        <FlatList 
                            data={result}
                            renderItem={_renderItem}
                            keyExtractor={item => item.id}                
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
                <Image source = {require("../assets/poster3.jpg")}
                style ={{width: width*0.3, height: height*0.15}}
                className="rounded-md m-1" />
        </TouchableWithoutFeedback>
    )
  }