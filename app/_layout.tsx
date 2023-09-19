import { Stack } from "expo-router";
import { View } from "react-native";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{ animation: "fade_from_bottom", header: () => null }}
      >
        <Stack.Screen name="home" />
        <Stack.Screen name="favorites" />
        <Stack.Screen name="lyrics" />
        <Stack.Screen name="account" />
        <Stack.Screen name="noty" options={{ presentation: "modal" }} />
      </Stack>
      <Footer />
    </>
  );
}
