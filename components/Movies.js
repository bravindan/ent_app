import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";

var { width, height } = Dimensions.get("window");

export default function Movies({ title, data }) {
  const navigation = useNavigation();

  const movieTitle = " The guardians of the galaxy and the transformers";

  return (
    <View className="mb-6 space-y-4">
      {/* movie row */}
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("MovieDetails", item)}           
          >
            <View className="flex-1 items-center mb-3 ">
              <Image
                source={require("../assets/poster5.jpg")}
                className="rounded-xl"
                style={{ width: width * 0.45, height: height * 0.28 }}
              />
              <Text className=" ml-1">
                {movieTitle.length > 14
                  ? movieTitle.slice(0, 15) + "..."
                  : movieTitle}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        className="p-2"
      />
    </View>
  );
}
