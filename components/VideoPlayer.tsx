import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [openVideo, setOpenVideo] = useState<boolean>(false);

  return (
    <View className="w-full mx-auto mt-4 py-1 pb-4 flex items-center justify-center bg-none">
      {/* Open Video */}
      {!openVideo && (
        <TouchableOpacity
          className="p-3 bg-gray-800 rounded-full flex-row justify-around items-center"
          onPress={() => setOpenVideo(!openVideo)}
        >
          <MaterialIcons name="video-collection" size={24} color="white" />
          <Text className="text-white ml-2 text-base">Video</Text>
        </TouchableOpacity>
      )}

      {/* Close Video */}
      {openVideo && (
        <TouchableOpacity
          className="absolute z-50 top-3 right-[7.5%] p-1 rounded-full flex-row justify-around items-center bg-gray-600"
          onPress={() => setOpenVideo(!openVideo)}
        >
          <Ionicons name="md-close" size={18} color="white" />
        </TouchableOpacity>
      )}

      {/* Video Player */}
      {openVideo && (
        <Video
          source={require("../assets/videos/samplevideo.mp4")}
          className="w-[90%] h-[185px] rounded-3xl bg-black"
          shouldPlay={false}
          volume={1.0}
          isMuted={false}
          isLooping={false}
          useNativeControls={true}
          resizeMode={ResizeMode.COVER}
        />
      )}
    </View>
  );
};

export default VideoPlayer;
