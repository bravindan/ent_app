import { View, Text, Dimensions, TouchableWithoutFeedback, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel'
import { imageURI500 } from '../api/constants';

var {width, height} =Dimensions.get('window');

export default function  TrendingMovies({data}) {

  
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate('MovieDetails', item);
  };

  const _renderItem = ({item}) =>
    (
      <MovieCard item={item} handleClick={handleClick}/>
    )
  
  return (
    <View className="mb-6">
      <Text className="font-bold text-lg mx-4 mb-5"> Trending Movies</Text>

      <Carousel data={data}
          renderItem={_renderItem}
          firstItem={1}
          inactiveSlideOpacity={0.40}
          sliderWidth={width}
          itemWidth={width*0.62}
          slideStyle = {{display: "flex", alignItems: "center"}}        
        />
    </View>
  )
}

const MovieCard = ({item, handleClick}) =>{
  return(
      <TouchableWithoutFeedback onPress = {()=>handleClick(item)}>
         <Image
          // source = {require("../assets/poster4.jpg")}
          source={{uri:`${imageURI500}${item?.poster_path}`}}
          style ={{width: width*0.6, height: height*0.4}}
         className="rounded-3xl" 
         />
      </TouchableWithoutFeedback>
  )
}