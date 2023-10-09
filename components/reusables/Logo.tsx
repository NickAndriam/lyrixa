import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const duration = 4000;
const easing = Easing.bezier(0.25, -0.5, 0.5, 1);

export default function Logo() {
  const sv = useSharedValue(0);

  React.useEffect(() => {
    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  }, []);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));
  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        className={`mx-2 text p-3 rounded-full shadow-sm shadow-white/10 border-[2px] border-mycyan  bg-black`}
        onPress={() => router.push("/lyrixa")}
      >
        <Image
          source={require("../../assets/img/logo.png")}
          resizeMode="contain"
          className="h-9 w-9"
        />
      </TouchableOpacity>
    </Animated.View>
  );
}
