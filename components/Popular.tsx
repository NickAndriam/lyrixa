import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Popular() {
  return (
    <View className="w-full pt-4">
      <Text className="text-start text-2xl text-white mb-5">POPULAR SONGS</Text>
      <ScrollView
        className=""
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {[1, 2, 3, 4, 5].map((list, index) => {
          return <PopularCard key={index} />;
        })}
      </ScrollView>
    </View>
  );
}

const PopularCard = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="w-36 h-48 bg-gray-700 m-2 rounded-3xl"
      onPress={() => router.push("lyrics")}
    >
      <View className="absolute bottom-0 left-0 p-3 flex items-start">
        <Text className="text-white text-center text-lg">Song Title</Text>
        <Text className=" text-center text-md text-gray-400">Artist</Text>
      </View>
    </TouchableOpacity>
  );
};
