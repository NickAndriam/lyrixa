import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import artists from "../../constants/dummyArtists.json";
import MyText from "./text/MyText";
import { BlurView } from "expo-blur";

interface Props {
  title: string;
  subtitle: string;
  image?: string;
  onPress?: () => void;
}

export default function BigMusicCard(props: Props) {
  return (
    <TouchableOpacity
      className="w-36 h-40 m-2 rounded-2xl"
      onPress={props.onPress}
    >
      <ImageBackground
        source={require("../../assets/img/artists/5.jpg")}
        className="w-36 h-40 bg-gray-800 rounded-3xl overflow-hidden flex items-start justify-end"
      >
        <BlurView
          className="flex bg-transparent justify-start items-start p-2 w-full "
          intensity={30}
          tint="dark"
        >
          <MyText className="text-white text-left text-base">
            {props.title}
          </MyText>
          <MyText className=" text-center text-md text-gray-400">
            {props.subtitle}
          </MyText>
        </BlurView>
      </ImageBackground>
    </TouchableOpacity>
  );
}
