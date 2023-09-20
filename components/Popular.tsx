import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import BigMusicCard from "./reusables/BigMusicCard";

export default function Popular() {
  const router = useRouter();
  return (
    <View className="w-full pt-4">
      <Text className="text-start text-2xl text-white mb-5">POPULAR SONGS</Text>
      <ScrollView
        className=""
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {[1, 2, 3, 4, 5].map((list, index) => {
          return (
            <BigMusicCard
              key={index}
              title="Song Title"
              subtitle="Artist"
              onPress={() => router.push("lyrics")}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
