import { View, Text, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'


export default function Navbar() {
    const navigation = useNavigation();
  return (   
        <View className="flex-row p-2 justify-around ">
            <TouchableOpacity  onPress={()=>navigation.navigate('Movies')}
             className="bg-neutral-200 p-1 rounded-md ">
                <Text className="font-bold mx-6">Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Series')}
             className="bg-neutral-200 p-1 rounded-md ">
                <Text className="font-bold mx-6">Series</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Music')}
             className="bg-neutral-200 p-1 rounded-md ">
                <Text className="font-bold mx-6">Music</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Search')}
             className=" p-1 rounded-md mx-1">
                <MagnifyingGlassIcon size={25} color="black" strokeWidth="4"/>
            </TouchableOpacity>
            </View>   
   
  )
}