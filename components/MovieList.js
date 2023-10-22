import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image } from 'react-native'

var {width, height} = Dimensions.get('window');

export default function MovieList({title, data}) {
    const navigation = useNavigation();

    const movieTitle=" The guardians of the galaxy and the transformers";

  return (
    <View className="mb-8 space-y-4">
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
            data.map((item, index) =>
                (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={()=>navigation.navigate('MovieDetails', item) }>
                            <View className="space-y-1 mr-4">
                                <Image
                                    source ={require('../assets/poster5.jpg')}
                                    className="rounded-3xl" 
                                    style ={{width:width*0.33, height:height*0.22}}
                                    />
                                <Text className=" ml-1">
                                    {movieTitle.length>14? movieTitle.slice(0,15)+"...": movieTitle}
                                </Text>
                            </View>
                    </TouchableWithoutFeedback>
                )
            )}

        </ScrollView>
    </View>
  )
}
