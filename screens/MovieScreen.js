import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import Movies from "../components/Movies";

export default function MovieScreen() {
  const [movies, setMovies] = useState([1, 2, 3, 4, 5, 6,7]);
  
  return (
   <Movies data={movies}/>
  );
}
