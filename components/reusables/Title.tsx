import { Text } from "react-native";
import React from "react";
import _ from "lodash";

interface Props {
  title: string;
  capitalize?: boolean;
}

export default function Title(props: Props) {
  return (
    <Text className={`text-2xl text-white my-4`}>{_.toUpper(props.title)}</Text>
  );
}
