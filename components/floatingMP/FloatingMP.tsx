import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import { Motion } from "@legendapp/motion";
import MyText from "../reusables/text/MyText";
import { smoothTransition } from "../../utils/animation";
import { height } from "../../utils/screensize";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Top from "./Top";
import LyricsOrImageOrVideo from "./LyricsOrImageOrVideo";

export default function FloatingMP() {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  return (
    <Motion.View
      className="absolute bottom-[100px] left-0 bg-gray-600 rounded-3xl overflow-hidden shadow-lg shadow-black
      "
      animate={{
        bottom: isOpened ? 0 : 100,
        height: isOpened ? height - 60 : 60,
        width: isOpened ? "100%" : "95%",
        marginHorizontal: isOpened ? "0%" : "2.5%",
      }}
      transition={smoothTransition}
    >
      {/* <Pressable onPress={() => setIsOpened(!isOpened)}> */}
      <ImageBackground
        source={require("../../assets/img/artists/5.jpg")}
        className="bg-gray-800 w-full h-full overflow-hidden"
        resizeMode="cover"
        blurRadius={200}
      >
        {isOpened ? (
          <Opened onClose={() => setIsOpened(false)} />
        ) : (
          <Closed onOpen={() => setIsOpened(true)} />
        )}
      </ImageBackground>
      {/* </Pressable> */}
    </Motion.View>
  );
}

const Closed = ({ onOpen }) => {
  return (
    <Pressable
      className="w-full h-full pl-6 pr-3 flex-row justify-between items-center"
      onPress={onOpen}
    >
      <View>
        <MyText className="text-lg">Sunshine Days</MyText>
        <MyText className="text-basmse">Alex Smith</MyText>
      </View>
      <View>
        <AntDesign name="pause" size={24} color="white" />
      </View>
    </Pressable>
  );
};

const Opened = ({ onClose }) => {
  return (
    <View className="w-full h-full px-5 py-3">
      <Top onPress={onClose} />
      <LyricsOrImageOrVideo />
    </View>
  );
};
