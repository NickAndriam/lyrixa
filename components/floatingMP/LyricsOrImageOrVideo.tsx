import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import MusicTabs from "../tabs/MusicTabs";
import MyText from "../reusables/text/MyText";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import song from "../../constants/songs.json";

const tabs = [
  {
    name: "Lyrics",
    slug: "lyrics",
  },
  {
    name: "Song",
    slug: "song",
  },
  {
    name: "Video",
    slug: "video",
  },
];

export default function LyricsOrImageOrVideo() {
  const [currentTab, setCurrentTab] = React.useState<string>("lyrics");
  return (
    <View>
      <MusicTabs
        tabs={tabs}
        setCurrentTab={(slug) => setCurrentTab(slug)}
        currentTab={currentTab}
      />
      {currentTab === "song" && <Song />}
      {currentTab === "lyrics" && <Lyrics />}
      {currentTab === "video" && <Song />}
      <Lyrics />
    </View>
  );
}

const MyImage = () => {
  return (
    <Image
      source={require("../../assets/img/artists/5.jpg")}
      className="bg-black w-full h-[200px] overflow-hidden my-5 rounded-2xl shadow-lg shadow-white"
      resizeMode="cover"
      resizeMethod="resize"
    />
  );
};

const Info = () => {
  return (
    <View className="flex-row justify-between items-center">
      <View className="flex items-start justify-center my-4">
        <MyText className="text-2xl">Sunshine Days</MyText>
        <MyText className="text-lg text-white/40">Alex Smith</MyText>
      </View>
      <AntDesign name="hearto" size={20} color="white" />
    </View>
  );
};

const MusicPlayer = () => {
  return (
    <View>
      <View className="my-2">
        {/* timer */}
        <View className="w-full flex-row justify-between py-2">
          <MyText className="text-white/40">01:48</MyText>
          <MyText className="text-white/40">04:20</MyText>
        </View>

        {/* progress */}
        <View className="relative">
          <View className="w-full h-2 rounded-full bg-white/20"></View>
          <View className="absolute left-0 top-0 w-[20%] h-2 rounded-full bg-white"></View>
        </View>
      </View>

      {/* control */}
      <View className="my-10 w-[80%] mx-auto flex-row items-center justify-around">
        <Ionicons
          name="repeat"
          size={30}
          color="gray"
          style={{ marginRight: 10 }}
        />
        <Ionicons name="play-skip-back-outline" size={34} color="white" />
        <Ionicons name="play" size={75} color="white" />
        <Ionicons name="play-skip-forward-outline" size={34} color="white" />
        <Ionicons
          name="md-shuffle"
          size={30}
          color="gray"
          style={{ marginLeft: 10 }}
        />
      </View>
    </View>
  );
};

const Song = () => {
  return (
    <>
      <MyImage />
      <Info />
      <MusicPlayer />
    </>
  );
};

const Lyrics = () => {
  return (
    <>
      <ScrollView className="h-[45%] my-4">
        <MyText className="text-lg text-white/60">{song.lyric}</MyText>
      </ScrollView>
      <Info />
      <MusicPlayer />
    </>
  );
};
