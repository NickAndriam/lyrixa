import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colorTheme } from "../../themes/color";

interface Props {
  name?: string;
  icon?: any;
  iconName?: string;
  size?: number;
  active?: boolean;
  onPress?: () => void;
}

export default function LyricsTabsIcon(props: Props) {
  return (
    <TouchableOpacity
      className={`${
        props.active
          ? "border-t-2 border-t-blue-600"
          : "border-none border-gray-800"
      }
      my-3
      `}
      onPress={props.onPress}
    >
      <View className="flex items-center justify-center px-2 mx-2">
        <props.icon
          name={props.iconName}
          size={props.size}
          color={props.active ? colorTheme.blue : colorTheme.light_gray}
        />
        <Text
          className={`${
            props.active ? "text-blue-500" : "text-gray-300"
          } text-[10px] mt-2 text-center`}
        >
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
