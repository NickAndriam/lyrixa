import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import songs from "../constants/songs.json";
import { Motion } from "@legendapp/motion";
import VideoPlayer from "../components/VideoPlayer";

export default function Details() {
  return (
    <View className="flex-1 bg-black">
      <Top />
      <VideoPlayer />
      <ScrollView>
        <Lyrics />
      </ScrollView>
    </View>
  );
}

function Top() {
  return (
    <Motion.View
      className="w-full bg-gray-800 rounded-b-[40%] pt-[115px]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <View className="w-full absolute bottom-0 left-0 flex items-center justify-center p-4">
        <Text className="text-2xl text-white font-bold">{songs.songTitle}</Text>
        <Text className="text-gray-400">{songs.artist}</Text>
      </View>
    </Motion.View>
  );
}

function Lyrics() {
  return (
    <Motion.View
      className="px-8 pb-24"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -Dimensions.get("screen").width, opacity: 0 }}
      transition={{ duration: 300, delay: 1 }}
    >
      {/* <Text className="text-white text-3xl py-4">{songs.songTitle}</Text> */}
      <Text className="text-gray-200 text-lg">{songs.lyric}</Text>
    </Motion.View>
  );
}
