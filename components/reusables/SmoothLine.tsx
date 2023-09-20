import { View, Text } from "react-native";
import React from "react";
import { Motion } from "@legendapp/motion";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colorTheme } from "../../themes/color";

interface Props {
  active?: boolean;
}

export default function SmoothLine(props: Props) {
  return (
    <View className="w-fullflex items-center justify-center pt-10 pb-5 ">
      {/* <MaterialIcons
        name="keyboard-arrow-left"
        size={55}
        color={colorTheme.mid_gray}
      /> */}
      {/* <MaterialCommunityIcons
        name="dots-vertical"
        size={55}
        color={colorTheme.mid_gray}
      /> */}
      <View className="w-[40px] h-[6px] bg-gray-400 rounded-full"></View>
    </View>
  );
}
