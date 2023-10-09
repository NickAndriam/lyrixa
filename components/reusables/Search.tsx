import { View, TextInput, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import Title from "./text/Title";

export function Search({ title = "Search" }) {
  return (
    <View className="w-full">
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
    </View>
  );
}
