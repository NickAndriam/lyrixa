import { View, Text, ImageBackground } from "react-native";
import React from "react";
import MyText from "./text/MyText";
import { Search } from "./Search";
import { BlurView } from "expo-blur";

export default function Header() {
  return (
    <View className="w-full bg-tranparent rounded-b-3xl pt-12 pb-5 px-4 overflow-hidden">
      <MyText className="text-3xl font-bold my-4">Favorites</MyText>
      <Search />
    </View>
  );
}
