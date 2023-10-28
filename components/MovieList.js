import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image } from 'react-native'

var {width, height} = Dimensions.get('window');

export default function MovieList({title, data}) {
    const navigation = useNavigation();
    const imageURI = `https://image.tmdb.org/t/p/w342/`
    

  return (
    <View className="mb-3 space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
            <Text className="font-bold mx-4 text-lg ">{title}</Text>
            <TouchableOpacity className="bg-neutral-200 px-1 rounded-md">
                <Text className="text-lg font-bold ">See All</Text>
            </TouchableOpacity>
        </View>

        {/* movie row */}
        <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={{paddingHorizontal:15}}
        >
            {
            data.map((item) =>
                (
                    <TouchableWithoutFeedback
                        key={item.id}
                        onPress={()=>navigation.navigate('MovieDetails', item) }>
                            <View className="space-y-1 mr-4">
                                
                                <Image
                                    source ={{uri:`${imageURI}${item?.poster_path}`}}
                                   
                                    className="rounded-3xl" 
                                    style ={{width:width*0.33, height:height*0.22}}
                                    />
                                <Text className=" ml-1 text-xs">
                                    {item.title?.length>14? item.title.slice(0,16)+"...": item.title}
                                </Text>
                            </View>
                    </TouchableWithoutFeedback>
                )
            )}

        </ScrollView>
    </View>
  )
}
