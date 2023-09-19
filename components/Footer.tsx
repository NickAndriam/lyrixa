import { View } from "react-native";
import React, { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import Swiper from "react-native-swiper";
import { colorTheme } from "../themes/color";
import { Motion } from "@legendapp/motion";
import { smoothTransition } from "../utils/animation";
import Nav from "./Nav";
import LyricsTabs from "./LyricsTabs";

export default function Footer() {
  const [showNoty, setShowNoty] = useState<boolean>(false);
  return (
    <Motion.View className="w-full h-[90px]" transition={smoothTransition}>
      <Swiper
        style={{
          backgroundColor: colorTheme.dark_gray,
        }}
        showsButtons={false}
        showsPagination={false}
        autoplay={false}
      >
        <View className="w-full flex items-center justify-center bg-gray-800">
          <Nav />
        </View>
        <View className="w-full flex items-center justify-center bg-gray-800">
          <MusicPlayer onShowNoty={() => setShowNoty(!showNoty)} />
        </View>
        <View className="w-full flex items-center justify-center bg-gray-800">
          <LyricsTabs />
        </View>
      </Swiper>
    </Motion.View>
  );
}
