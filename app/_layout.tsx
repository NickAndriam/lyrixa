import { Stack } from "expo-router";
import Footer from "../components/layout/Footer";
import LyricsTabs from "../components/tabs/LyricsTabs";
import { useCallback, useEffect } from "react";
import { Audio } from "expo-av";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { useDisableFlatlistError } from "../hooks/useDisableError";
import FloatingMP from "../components/floatingMP/FloatingMP";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useDisableFlatlistError();
  const [fontsLoaded, fontError] = useFonts({
    Alata: require("../assets/fonts/Satoshi/Satoshi-Black.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{
          // animationDuration: 50,
          animation: "none",
          header: () => null,
          autoHideHomeIndicator: true,
        }}
      >
        <Stack.Screen name="noty" options={{ presentation: "modal" }} />
      </Stack>
      <View onLayout={onLayoutRootView} className="bg-gray-800 flex">
        <FloatingMP />
        <LyricsTabs />
        <Footer />
      </View>
    </>
  );
}
