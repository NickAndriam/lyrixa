import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import MyText from "../reusables/text/MyText";

export default function Top({ onPress }) {
  return (
    <View className="flex-row items-center justify-between mx-2">
      <TouchableOpacity onPress={onPress}>
        <FontAwesome5 name="angle-down" size={34} color="white" />
      </TouchableOpacity>
      <View className="">
        <MyText className="text-md">Now Playing</MyText>
      </View>

      <TouchableOpacity>
        <MaterialIcons name="filter-list" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}
