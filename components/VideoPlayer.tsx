import React, { useState } from "react";
import { View } from "react-native";
import { Video } from "expo-av";

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View className="w-full mx-auto mt-4 p-1 flex items-center justify-center bg-none">
      {/* Video Player */}
      <Video
        source={require("../assets/videos/samplevideo.mp4")}
        className="w-[90%] h-[185px] rounded-3xl bg-black"
      />

      {/* Play/Pause Button */}
      {/* <TouchableOpacity
        style={styles.playPauseButton}
        onPress={handlePlayPause}
      >
        <Text style={styles.playPauseButtonText}>
          {isPlaying ? "Pause" : "Play"}
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default VideoPlayer;
