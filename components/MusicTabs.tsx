import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";

export default function MusicTabs({ tabs }) {
  return (
    <View className="pb-4">
      <FlatList
        horizontal
        centerContent
        showsHorizontalScrollIndicator={false}
        data={tabs}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => <Tab name={item.name} slug={item.slug} />}
      />
    </View>
  );
}

const Tab = ({ name, slug }) => {
  return (
    <TouchableOpacity className="p-2 border border-gray-400 rounded-full m-1">
      <Text className="text-white">{name}</Text>
    </TouchableOpacity>
  );
};
