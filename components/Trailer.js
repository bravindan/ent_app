import { View, Text, Linking, TouchableOpacity } from 'react-native';

export default Trailer = ({ trailerURL }) => {

  return (
    <View className=" flex-row items-center ">
      <Text className="mx-4 font-semibold">Watch Trailer:</Text>
      <TouchableOpacity
        onPress={() => Linking.openURL(trailerURL)}       
       >
        <Text className=" text-blue-800 bg-blue-400 px-2 rounded-lg">Click here</Text>
      </TouchableOpacity>
    </View>
  );
};


