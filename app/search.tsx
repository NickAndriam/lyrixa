import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Search } from "../components/reusables/Search";
import MusicTabs from "../components/tabs/MusicTabs";
import searchTabList from "../constants/musicTabsList.json";
import SafeView from "../components/layout/SafeView";

export default function Favorites() {
  return (
    <SafeView className="bg-black h-full pt-10">
      <Search />
      <MusicTabs tabs={searchTabList} />
    </SafeView>
  );
}
