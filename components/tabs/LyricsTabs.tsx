import { Animated, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import LyricsTabsIcon from "../reusables/LyricsTabsIcon";
import { usePathname } from "expo-router";
import { formatPathname } from "../../utils/formatter";
import SmoothLine from "../reusables/SmoothLine";
import useSwipeUpDown from "../../hooks/swipeGesture/swipeUpDown";
import AdvanceTabs from "./AdvanceTabs";

export default function LyricsTabs() {
  const pathname = usePathname();
  const [currentHeight, setCurrentHeight] = useState<number>(170);
  const {
    panY,
    controlPanHandlers,
    controlSwipe, // Function to control swipe externally
  } = useSwipeUpDown(
    185,
    0,
    20,
    () => {},
    () => {}
  );

  const [openTab, setOpenTab] = useState<boolean>(false);
  if (formatPathname(pathname) !== "lyrics") return;

  return (
    <Animated.View
      className="absolute left-0 bottom-[90px] pb-2 flex-col items-center justify-center w-full  rounded-tl-3xl rounded-tr-3xl bg-black
       border-[0.4px] border-gray-600 py-6"
      style={{ transform: [{ translateY: panY }] }}
      // pointerEvents="box-none"
    >
      <LyricsInfo />
      <View className="bg-gray-600 my-2 border border-b-[0.4px] border-gray-700 w-10" />
      <AdvanceTabs />
      <View
        className={`absolute w-full top-2 left-0 pt-1 pb-4 `}
        {...controlPanHandlers}
      >
        <SmoothLine />
      </View>
    </Animated.View>
  );
}

const LyricsInfo = () => {
  return (
    <View className="flex-row items-center justify-center">
      <LyricsTabsIcon
        name="Text Size"
        icon={Ionicons}
        size={28}
        iconName="text"
      />
      <LyricsTabsIcon
        name="Speed"
        icon={MaterialCommunityIcons}
        size={28}
        iconName="arrow-expand-vertical"
      />
      <LyricsTabsIcon
        name="Play Lyrics"
        icon={AntDesign}
        size={26}
        iconName="playcircleo"
      />
      <LyricsTabsIcon
        name="Download"
        icon={Ionicons}
        size={30}
        iconName="md-download-outline"
      />
      <LyricsTabsIcon
        name="Share"
        icon={FontAwesome}
        size={25}
        iconName="share-square-o"
      />
    </View>
  );
};
