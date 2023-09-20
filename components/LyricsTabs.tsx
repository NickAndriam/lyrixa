import { Animated, Pressable } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import LyricsTabsIcon from "./reusables/LyricsTabsIcon";
import { usePathname } from "expo-router";
import { formatPathname } from "../utils/formatter";
import SmoothLine from "./reusables/SmoothLine";
import useSwipeUpDown from "../hooks/swipeGesture/swipeUpDown";

export default function LyricsTabs() {
  const pathname = usePathname();
  const { panY, panHandlers } = useSwipeUpDown(70, 5);
  const [openTab, setOpenTab] = useState<boolean>(false);
  if (formatPathname(pathname) !== "lyrics") return;

  return (
    // <Animated.View>
    <Animated.View
      className="absolute left-0 bottom-20 pb-2 flex-row items-center justify-center w-full  rounded-tl-3xl rounded-tr-3xl bg-gray-800
       border-[0.5px] border-gray-700"
      style={{ transform: [{ translateY: panY }] }}
      {...panHandlers}
    >
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
        size={30}
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
      <Pressable
        className={`absolute w-full -top-16 left-0`}
        // onPress={() => setOpenTab(!openTab)}
      >
        <SmoothLine active={openTab} />
      </Pressable>
    </Animated.View>
    // </Animated.View>
  );
}
