import { useNavigation } from "@react-navigation/native";
import React from "react";
import {imageURI500} from '../api/constants'

import {
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";

var { width, height } = Dimensions.get("window");

export default function Series({  data }) {
  const navigation = useNavigation();


  return (
    <View className="mb-6 space-y-4">
      {/* movie row */}
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SeriesDetails", item)}           
          >
            <View className="flex-1 items-center mb-3 ">
              <Image
                // source={require("../assets/poster5.jpg")}
                source={{uri:`${imageURI500}${item?.poster_path}`}}
                className="rounded-xl"
                style={{ width: width * 0.45, height: height * 0.28 }}
              />
              <Text className=" ml-1">
                {item.title?.length>14 || item.name?.length > 14
                  ? item.title?.slice(0, 15) || item.name?.slice(0, 15) + "..."
                  : item.title || item.name}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        className="p-2"
      />
    </View>
  );
}
