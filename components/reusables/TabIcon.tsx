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

export default function TabIcon(props: Props) {
  return (
    <TouchableOpacity
      className={`${
        props.active
          ? "border-t-2 border-t-blue-500"
          : "border-none border-gray-800"
      }
      `}
      onPress={props.onPress}
    >
      <View className=" h-full flex items-center justify-center py-2 px-2 mx-1">
        <props.icon
          name={props.iconName}
          size={props.size}
          color={props.active ? colorTheme.blue : colorTheme.white}
        />
        <Text
          className={`${
            props.active ? "text-blue-500" : "text-gray-300"
          } text-[12px] mt-2`}
        >
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
