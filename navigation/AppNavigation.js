import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LandingScreen from '../screens/LandingScreen';
import SearchScreen from '../screens/SearchScreen';
import MovieScreen from '../screens/MovieScreen';
import SeriesScreen from '../screens/SeriesScreen';
import MusicScreen from '../screens/MusicScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import SeriesDetailsScreen from '../screens/SeriesDetailsScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    
 return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
            backgroundColor: 'lightgray',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:22
            },
            headerTitleAlign: 'center'      
      }}>
            <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown:false}} />
            <Stack.Screen name="Home" component={HomeScreen} options={{title:"Movies & Tv Shows" }}/>
            <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
            <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{headerShown:false}} />
            <Stack.Screen name="Movies" component={MovieScreen} options={{title:"Movies" }}/>              
            <Stack.Screen name="Series" component={SeriesScreen} options={{title:"Series"}} />
            <Stack.Screen name="Music"  component={MusicScreen}  options={{title:"Music"}}  />
            <Stack.Screen name="SeriesDetails"  component={SeriesDetailsScreen}  options={{headerShown: false}}  />

        </Stack.Navigator>
    </NavigationContainer>
 )
}