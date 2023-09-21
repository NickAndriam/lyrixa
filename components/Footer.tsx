import { View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MusicPlayer from "./MusicPlayer";
import Swiper from "react-native-swiper";
import { colorTheme } from "../themes/color";
import { Motion } from "@legendapp/motion";
import { smoothTransition } from "../utils/animation";
import Nav from "./Nav";
import { formatPathname } from "../utils/formatter";
import { usePathname } from "expo-router";

export default function Footer() {
  const path = usePathname();
  const ref = useRef("swiper") as any;
  const [showNoty, setShowNoty] = useState<boolean>(false);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const pathname = formatPathname(path);

  useEffect(() => {
    const currentindex = this.swiper.state.index;
    if (pathname === "lyrics") {
      this.swiper.scrollBy(1);
    } else if (pathname === "home") {
      this.swiper.scrollBy(0);
    }
  }, [pathname]);

  // console.log(this.swiper.state.index);
  return (
    <Motion.View className="w-full h-[95px]" transition={smoothTransition}>
      <Swiper
        style={{
          backgroundColor: colorTheme.primary,
        }}
        showsButtons={false}
        showsPagination={false}
        autoplay={false}
        loop
        // onIndexChanged={(index) => setActiveTabIndex(index)}
        ref={(component) => (this.swiper = component)}
      >
        <View className="w-full flex items-center justify-center bg-primary">
          <Nav />
        </View>
        <View className="w-full flex items-center justify-center bg-primary">
          <MusicPlayer onShowNoty={() => setShowNoty(!showNoty)} />
        </View>
      </Swiper>
    </Motion.View>
  );
}
