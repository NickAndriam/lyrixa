import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import artists from "../../../constants/dummyArtists.json";
import MyText from "../text/MyText";
import { BlurView } from "expo-blur";

interface Props {
  image?: string;
  title?: string;
  subtitle?: string;
}

export default function SongCard(props: Props) {
  return (
    <BlurView
      className="flex w-[48%] h-16 m-1 p-1 bg-white/5 rounded-full overflow-hidden flex-row justify-between items-center"
      tint="light"
      intensity={10}
    >
      {/* left side */}
      <ImageBackground
        className="bg-gray-400 w-14 h-14 mr-2 items-center justify-center rounded-full overflow-hidden "
        source={require("../../../assets/img/artists/2.jpg")}
        style={{ borderRadius: 50 }}
      />

      {/* right side */}
      <View className="flex h-20 items-start justify-center  w-full">
        <MyText className="text-white font-bold text-start text-xs">
          {props.title}
        </MyText>
        <MyText className=" text-start text-xs text-gray-400">
          {props.subtitle}
        </MyText>
      </View>
    </BlurView>
  );
}
