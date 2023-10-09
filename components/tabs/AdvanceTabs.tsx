import { Pressable, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import LyricsTabsIcon from "../reusables/LyricsTabsIcon";
import { usePathname } from "expo-router";
import { formatPathname } from "../../utils/formatter";
import { Entypo } from "@expo/vector-icons";

export default function AdvanceTabs() {
  const pathname = usePathname();
  if (formatPathname(pathname) !== "lyrics") return;

  return (
    <View className="flex-row items-center justify-center w-full bg-black">
      <AdvanceInfo />
    </View>
  );
}

const AdvanceInfo = () => {
  return (
    <>
      <LyricsTabsIcon
        name="BPM"
        icon={MaterialCommunityIcons}
        size={28}
        iconName="metronome"
        onPress={() => alert("test")}
      />
      <LyricsTabsIcon name="Key" icon={Entypo} size={28} iconName="note" />
      <LyricsTabsIcon
        name="Noty"
        icon={MaterialCommunityIcons}
        size={30}
        iconName="note-edit-outline"
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
    </>
  );
};

interface Props {
  name?: string;
  icon?: any;
  iconName?: string;
  size?: number;
  active?: boolean;
  onPress?: () => void;
}

const AdvanceTabIcon = (props: Props) => {
  return (
    <TouchableOpacity
      className={`${
        props.active
          ? "border-t-2 border-t-blue-600"
          : "border-none border-gray-800"
      }
      my-3
      `}
      onPress={props.onPress}
    >
      <View className="flex items-center justify-center px-2 mx-2">
        <Text
          className={`${
            props.active ? "text-blue-500" : "text-gray-500"
          } text-[10px] mt-2 text-center`}
        >
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
