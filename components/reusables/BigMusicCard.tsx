import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  title: string;
  subtitle: string;
  onPress?: () => void;
}

export default function BigMusicCard(props: Props) {
  return (
    <TouchableOpacity
      className="w-36 h-48 bg-secondary m-2 rounded-3xl"
      onPress={props.onPress}
    >
      <View className="absolute bottom-0 left-0 p-3 flex items-start">
        <Text className="text-white text-left text-lg">{props.title}</Text>
        <Text className=" text-center text-md text-gray-400">
          {props.subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
