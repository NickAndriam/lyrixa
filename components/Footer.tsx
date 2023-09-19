import { View, Text } from "react-native";
import React, { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import Noty from "./Noty";
import Swiper from "react-native-swiper";
import { colorTheme } from "../themes/color";
import { Motion } from "@legendapp/motion";
import { height } from "../utils/screensize";
import { smoothTransition } from "../utils/animation";
import Nav from "./Nav";

export default function Footer() {
  const [showNoty, setShowNoty] = useState<boolean>(false);
  return (
    <Motion.View
      className="w-full h-20"
      animate={{ height: showNoty ? height - 200 : 100 }}
      transition={smoothTransition}
    >
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
      </Swiper>
    </Motion.View>
  );
}

const styles = {
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
};
