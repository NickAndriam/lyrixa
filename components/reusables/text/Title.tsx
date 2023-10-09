import { Text } from "react-native";
import React from "react";
import _ from "lodash";

interface Props {
  title: string;
  capitalize?: boolean;
  className?: string;
}

export default function Title(props: Props) {
  return (
    <Text
      className={`text-2xl text-white my-2 font-bold ${props.className}`}
      style={{ fontFamily: "Alata" }}
      {...props}
    >
      {props.capitalize ? _.toUpper(props.title) : props.title}
    </Text>
  );
}
