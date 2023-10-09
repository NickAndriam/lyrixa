import { View, Text, ImageBackground } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

export default function SafeView(props: Props) {
  return (
    <>
      <View className={`pt-[120px] z-50 ${props.className}`}>
        {props.children}
      </View>
    </>
  );
}
