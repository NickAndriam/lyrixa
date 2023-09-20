import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Search } from "../components/Search";
import MusicTabs from "../components/MusicTabs";

export default function Favorites() {
  return (
    <View className="bg-gray-800 h-full pt-10">
      <Search />
      <MusicTabs />
    </View>
  );
}
