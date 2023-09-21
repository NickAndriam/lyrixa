import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SongCard() {
  return (
    <TouchableOpacity onPress={() => router.push("/lyrics")}>
      <View className="flex w-[95%] m-auto h-24 my-2 bg-secondary rounded-full p-9 flex-row justify-between items-center">
        <View className="flex w-2/4 h-full items-start justify-center">
          <Text className="text-white text-start text-lg">Song Title</Text>
          <Text className=" text-start text-md text-gray-400">Artist</Text>
        </View>

        {/* <View className=" border border-white w-10 h-10 items-center justify-center rounded-full m-1 rotate-180 animate-spin">
                <Ionicons name="musical-note-outline" size={24} color="white" />
            </View> */}
        <View className="flex flex-row items-center justify-center p-1 ml-6">
          <View className="w-10 h-10 items-center justify-center rounded-full m-1">
            <Ionicons name="heart-outline" size={24} color="white" />
          </View>
          <View className="bg-white w-14 h-14 items-center justify-center rounded-full m-1">
            <FontAwesome5 name="play" size={24} color="black" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
