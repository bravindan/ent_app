import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LandingScreen from '../screens/LandingScreen';
import { HomeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { TouchableOpacity } from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import MovieScreen from '../screens/MovieScreen';
import SeriesScreen from '../screens/SeriesScreen';
import MusicScreen from '../screens/MusicScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    
 return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="" screenOptions={{
        headerStyle: {
          backgroundColor: 'lightgray',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:22
        },
        headerTitleAlign: 'center',
        // headerLeft: ()=>(
        // <Image source={require('../assets/adaptive-icon.png') }
        //  style={{width:30, height:30}}/>)
      
      }}>
            <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown:false}} />
            <Stack.Screen name="Home" component={HomeScreen}
                options={{title:"Movies & Tv Shows",
                headerRight:()=>(
                    <TouchableOpacity >
                        {/* <HomeIcon size={30} color="gray" fill="black"/> */}
                    </TouchableOpacity>
                )}}/>

            <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
            <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{headerShown:false}} />

            <Stack.Screen name="Movies" component={MovieScreen}
                options={{title:"Movies",
                headerRight:()=>(
                    <TouchableOpacity >
                        {/* <HomeIcon size={30} color="gray" fill="black"/> */}
                    </TouchableOpacity>
                )}}/>
                <Stack.Screen 
                    name="Series" 
                    component={SeriesScreen}
                    options={{title:"Series"}}
                />
                <Stack.Screen 
                    name="Music" 
                    component={MusicScreen}
                    options={{title:"Music"}}
                />
        </Stack.Navigator>
    </NavigationContainer>
 )
}