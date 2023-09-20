import { View, Text } from "react-native";
import React from "react";
import { Search } from "../components/Search";
import MusicTabs from "../components/MusicTabs";
import favoriteTabList from "../constants/favoriteTabs.json";
import Playlist from "../components/Playlist";
import { ScrollView } from "react-native-gesture-handler";

export default function Favorites() {
  return (
    <View className="bg-gray-800 h-full pt-10">
      <Search />
      <MusicTabs tabs={favoriteTabList} />
      <Playlist />
    </View>
  );
}
