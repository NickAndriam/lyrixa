import { View, Text, ScrollView, Dimensions } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import songs from "../constants/songs.json";
import { Motion } from "@legendapp/motion";

export default function Details() {
  const router = useRouter();
  const { name } = useLocalSearchParams();
  return (
    <View className="flex-1 bg-gray-800">
      <Top />
      <ScrollView>
        <Lyrics />
      </ScrollView>
    </View>
  );
}

function Top() {
  return (
    <Motion.View
      className="w-full pt-20 h-40 bg-gray-600 rounded-b-[65%]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <View className="w-full absolute bottom-0 left-0 flex items-center justify-center p-4">
        <Text className="text-2xl text-white">{songs.songTitle}</Text>
        <Text className="text-gray-400">{songs.artist}</Text>
      </View>
    </Motion.View>
  );
}

function Lyrics() {
  return (
    <Motion.View
      className="p-8 pb-10"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -Dimensions.get("screen").width, opacity: 0 }}
      transition={{ duration: 300, delay: 1 }}
    >
      <Text className="text-white text-3xl py-4">{songs.songTitle}</Text>
      <Text className="text-gray-200 text-base">{songs.lyric}</Text>
    </Motion.View>
  );
}
