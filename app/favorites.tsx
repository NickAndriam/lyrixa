import { View, Text } from "react-native";
import React from "react";
import { Search } from "../components/reusables/Search";
import MusicTabs from "../components/tabs/MusicTabs";
import favoriteTabList from "../constants/favoriteTabs.json";
import Playlist from "../components/Playlist";
import { ScrollView } from "react-native-gesture-handler";

export default function Favorites() {
  return (
    <View className="bg-black h-full pt-10">
      <Search />
      <MusicTabs tabs={favoriteTabList} />
      <Playlist />
    </View>
  );
}
