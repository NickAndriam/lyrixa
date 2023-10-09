import { View, Text } from "react-native";
import React from "react";

export default function MyText({ children, ...props }) {
  return (
    <Text
      className="text-[12px] text-white"
      style={{ fontFamily: "Alata" }}
      {...props}
    >
      {children}
    </Text>
  );
}
