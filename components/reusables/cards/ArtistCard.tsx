import { View, Text, ImageBackground } from "react-native";
import React from "react";
import MyText from "../text/MyText";

export default function ArtistCard({ title, subtitle, image }) {
  return (
    <View className="m-1">
      <ImageBackground
        source={image}
        className="h-32 w-32 bg-gray-800 rounded-full overflow-hidden"
      />
      <View className="flex items-center justify-center my-2">
        <MyText className="text-base">{title}</MyText>
        <MyText className="text-gray-500">{subtitle}</MyText>
      </View>
    </View>
  );
}
