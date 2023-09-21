import { Stack } from "expo-router";
import Footer from "../components/Footer";
import LyricsTabs from "../components/LyricsTabs";
import SwipeOutView from "../utils/animation";
import { useEffect } from "react";
import { Audio } from "expo-av";

export default function Layout() {
  useEffect(() => {
    // Initialize the audio session
    const initializeAudio = async () => {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        // interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        // interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      });
    };
    void initializeAudio();
  });

  return (
    <>
      <Stack
        screenOptions={{
          animationDuration: 80,
          animation: "fade",
          header: () => null,
          autoHideHomeIndicator: true,
        }}
      >
        <Stack.Screen name="noty" options={{ presentation: "modal" }} />
      </Stack>

      {/* <SwipeOutView /> */}
      <LyricsTabs />
      <Footer />
    </>
  );
}
