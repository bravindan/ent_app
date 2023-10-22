import { View, Text, ScrollView, TouchableOpacity, Platform, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, StarIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';


const ios = Platform.OS === 'ios';
var {width, height} = Dimensions.get('window');
const topMargin = ios? "":"mt-3";

export default function MovieDetailsScreen() {

    const {params:item} = useRoute();
    const navigation = useNavigation();
    const movieName = "Avengers Endgame and the guardians";
    
    const bgc =['transparent','rgba(200,200,200,0.8)', 'rgba(200,200,200,0.9)'];
    useEffect(() =>{
        // api call for movie details
    },[item])

  return (
    <ScrollView
        contentContainerStyle={{paddingBottom:20}}
         className="flex-1"
         style={{backgroundColor:'rgba(200,200,200,1)'}}
         >
        <View className="w-full ">
            <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4"+topMargin}>
                <TouchableOpacity onPress={()=>navigation.goBack()} className="rounded-xl p-1">
                    <ChevronLeftIcon size ="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity className="rounded-xl p-1">
                    <StarIcon size ="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
            </SafeAreaView>
           
            <View>
                <Image 
                    source ={require("../assets/poster3.jpg")}
                    style ={{width, height:height*0.55}} 
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
                    // colors={['transparent','#171717CC', '#171717FF']}
                    // colors={['transparent','rgba(23,23,23,0.8)','rgba(23,23,23,0.8)']}
                    style={{width, height:height*0.35}}
                    start={{x:0.5, y:0}}
                    end={{x:0.5, y:1}}
                    className="absolute bottom-0"
                    />
            <Text className="text-neutral-900 text-center- text-xl font-bold mx-4 tracking-wider">
                {movieName}
            </Text>
            <Text className="text-neutral-600 font-semibold  mx-4">
                Released ◦ 2023 ◦ 120 min
            </Text>
            <View className="flex-row mx-4">
                <Text className="text-neutral-900 font-semibold">Genre: </Text>
                <Text className="text-neutral-600 font-semibold  text-center">Action,</Text>
                <Text className="text-neutral-600 font-semibold  text-center">Thriller,</Text>
                <Text className="text-neutral-600 font-semibold t text-center">Crime</Text>
            </View>
            <View>
                <Text className="mx-4 text-neutral-900 font-semibold">
                    Overview:
                </Text>
                <Text className=" tracking-tighter mx-4 text-neutral-600">
                   Lorem ipsum dolor sit amet, consectetur adip non pro id el aspect et non proident.
                </Text>
            </View>
        </View>
            {/* cast */}
            <View className="mt-4">
                <Text className="mx-4 text-neutral-900 font-semibold">
                    Cast:
                </Text>
                <Text className=" tracking-tighter mx-4 text-neutral-600">
                   Lorem ipsum dolor sit amet, consectetur adip non pro id el aspect et non proident.
                </Text>
            </View>
        </View>
        
    </ScrollView>
  )
}