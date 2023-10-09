import { View, FlatList } from "react-native";
import React from "react";
import Title from "./reusables/text/Title";
import playlists from "../constants/dummyPlaylist.json";
import BigMusicCard from "./reusables/BigMusicCard";

export default function Playlist() {
  return (
    <View className="px-6 w-full flex-1">
      <FlatList
        ListHeaderComponent={() => (
          <Title title="Your Playlists" capitalize={true} />
        )}
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
