import { View, TextInput, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import Title from "./text/Title";

export function Search({ title = "Search" }) {
  return (
    <BlurView
      className="absolute top-0 left-0 w-full px-5 pt-14 pb-4 bg-black"
      intensity={50}
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 10,
        borderRadius: 0,
      }}
      tint="dark"
    >
      {/* <Text className="my-2 text-white text-2xl font-bold ml-2">{title}</Text> */}
      <View className="flex-row justify-between items-center w-full border-[0.5px] border-white/50 border-opacity-0 px-6 py-2 rounded-full">
        <TextInput
          placeholder="Search For Lyrics, Artist, Songs... "
          placeholderTextColor="white"
          className="text-gray-200 text-base text-left pb-1"
        ></TextInput>
        <TouchableOpacity className="absolute right-4 top-[8px] rounded-full">
          <AntDesign name="search1" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </BlurView>
  );
}
