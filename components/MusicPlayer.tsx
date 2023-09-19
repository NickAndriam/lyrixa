import { View, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Motion } from "@legendapp/motion";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MyIcon } from "../components/reusables";
import { colorTheme } from "../themes/color";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

interface MusicPlayerProps {
  onPlay?: boolean;
  onShowNoty?: any;
  onMinimize?: any;
}

export default function MusicPlayer(props: MusicPlayerProps) {
  let maxStyle = {
    bottom: 0,
    right: 0,
    width: Dimensions.get("window").width,
    height: 96,
  };

  //   multimedia max size
  function MaxSize({}) {
    return (
      <View className="w-[95%] h-20 bg-gray-800 rounded-full m-auto flex flex-row justify-around items-center px-5">
        <MyIcon
          icon={MaterialCommunityIcons}
          name="note-edit-outline"
          size={22}
          color={colorTheme.white}
          activeColor={colorTheme.blue}
          onPress={() => router.push("/noty")}
        />
        <View className="flex flex-row justify-center items-center">
          <BackwardButton />
          <PlayButton />
          <ForwardButton />
        </View>
        <MyIcon
          icon={AntDesign}
          name="hearto"
          secondName="heart"
          size={20}
          color="white"
          activeColor={colorTheme.red}
        />
      </View>
    );
  }

  //  main return
  return (
    <Motion.View
      className="w-full h-20"
      animate={maxStyle}
      transition={{ duration: 200 }}
    >
      <MaxSize />
    </Motion.View>
  );
}

function PlayButton({}) {
  return (
    <TouchableOpacity className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
      <Entypo name="controller-play" size={40} color="white" />
    </TouchableOpacity>
  );
}
function BackwardButton() {
  return (
    <TouchableOpacity className="w-10 h-10 flex items-center justify-center m-2">
      <Feather name="rotate-ccw" size={20} color="white" />
    </TouchableOpacity>
  );
}
function ForwardButton() {
  return (
    <TouchableOpacity className="w-10 h-10 flex items-center justify-center m-2">
      <Feather name="rotate-cw" size={20} color="white" />
    </TouchableOpacity>
  );
}
