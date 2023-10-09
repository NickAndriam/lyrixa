import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import BigMusicCard from "./reusables/BigMusicCard";
import artists from "../constants/dummyArtists.json";
import MyText from "./reusables/text/MyText";
import Title from "./reusables/text/Title";

export default function Popular() {
  const router = useRouter();
  return (
    <View className="w-full pt-4">
      <Title className="text-start text-2xl text-white" title="Popular Songs" />
      <ScrollView
        className=""
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <FlatList
          horizontal
          keyExtractor={(item) => item.id.toString()}
          data={artists}
          renderItem={({ item }) => (
            <BigMusicCard
              title={item.songs[0]}
              subtitle={item.name}
              onPress={() => router.push("lyrics")}
            />
          )}
        />
      </ScrollView>
    </View>
  );
}
