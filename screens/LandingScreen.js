import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {ArrowRightIcon} from 'react-native-heroicons/solid'

export default function LandingScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-neutral-400 ">
        <Text className="text-xl text-gray-300 p-2">
            Find your favorite movies and Tv shows here
        </Text>
        <Pressable onPress={()=>navigation.navigate('Home')}
         className="bg-neutral-500 p-3 rounded-md flex-row items-center justify-center">           
                <Text className="text-gray-300 text-xl" >Get Started </Text>
                <ArrowRightIcon size={20} color='white'/>  
        </Pressable>
    </View>
  )
}