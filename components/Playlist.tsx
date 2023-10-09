import { View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Title from "./reusables/text/Title";
import playlists from "../constants/dummyPlaylist.json";
import BigMusicCard from "./reusables/BigMusicCard";
import { AntDesign } from "@expo/vector-icons";
import MyText from "./reusables/text/MyText";

export default function Playlist({ title, withAdd = false }) {
  return (
    <View className="px-4 w-full h-full flex-1 items-center justify-center">
      <View className="w-full flex-row justify-between items-center px-4">
        <Title title={title} capitalize={true} className="text-white/70" />
        {withAdd && (
          <TouchableOpacity>
            <AntDesign name="pluscircleo" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={playlists}
        renderItem={({ item }) => (
          <BigMusicCard
            key={item.id}
            title={item.title}
            subtitle={item.dateCreated}
          />
        )}
      />
    </View>
  );
}
