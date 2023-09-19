import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { Motion } from "@legendapp/motion";
import { height, width } from "../utils/screensize";
import { TextInput } from "react-native-gesture-handler";

export default function Noty({ show }) {
  return (
    <Motion.View
      className="w-[90%] m-auto bg-gray-800 rounded-3xl border border-gray-700 p-2"
      animate={{
        height: show ? height - height / 1.5 : 0,
        opacity: show ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 1000, damping: 100 }}
    >
      {/* <Text className="text-center text-3xl text-white">Noty</Text> */}
      <TextInput
        multiline
        numberOfLines={30}
        placeholder="Write a Note about this song!"
        placeholderTextColor="white"
        className="placeholder:text-white px-4 text-lg max-h-96"
        onFocus={() => console.log("focus")}
      ></TextInput>
    </Motion.View>
  );
}
