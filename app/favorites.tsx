import { View, Text, ScrollView, ImageBackground } from "react-native";
import React from "react";
import { Search } from "../components/reusables/Search";
import MusicTabs from "../components/tabs/MusicTabs";
import favoriteTabList from "../constants/favoriteTabs.json";
import Playlist from "../components/Playlist";
import Header from "../components/reusables/Header";
import Spacer from "../components/reusables/Spacer";
import { LinearGradient } from "expo-linear-gradient";

export default function Favorites() {
  return (
    // <ImageBackground
    //   // tintColor="dark"
    //   blurRadius={50}
    //   className="bg-black h-full"
    //   source={require("../assets/img/bg/6.jpg")}
    // >
    <LinearGradient
      colors={["#2A2F3B", "#0C1317", "#0C1317"]}
      locations={[0, 0.5, 0.9]}
      className="h-full w-full bg-black"
    >
      <Header />
      {/* <Search /> */}
      {/* <MusicTabs tabs={favoriteTabList} /> */}
      <ScrollView className="pt-4">
        <Playlist title="Playlists" withAdd />
        <Spacer className="my-8" />
        <Playlist title="Albums" />
      </ScrollView>
      <Spacer className="pb-40" />
    </LinearGradient>
    // </ImageBackground>
  );
}
