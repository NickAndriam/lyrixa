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
    <TouchableOpacity onPress={props.onPress}>
      <View className="h-20 flex items-center justify-center px-2 mx-2">
        <props.icon
          name={props.iconName}
          size={props.size}
          color={props.active ? colorTheme.cyan : colorTheme.gray.light}
        />
        <Text
          className={`${
            props.active ? "text-mycyan font-bold" : "text-gray-100"
          } text-[10px] mt-1`}
        >
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
