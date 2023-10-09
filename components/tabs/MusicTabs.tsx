import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";

export default function MusicTabs({ tabs, setCurrentTab, currentTab }) {
  return (
    <View className="py-2">
      <FlatList
        horizontal
        centerContent
        showsHorizontalScrollIndicator={false}
        data={tabs}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => (
          <Tab
            name={item.name}
            slug={item.slug}
            currentTab={currentTab}
            onSelect={() => setCurrentTab(item.slug)}
          />
        )}
      />
    </View>
  );
}

const Tab = ({ name, slug, onSelect, currentTab }) => {
  return (
    <TouchableOpacity
      className={`p-2 border border-gray-400 rounded-full m-1
      ${currentTab === slug ? "bg-white/90" : "bg-tranparent"}`}
      onPress={() => onSelect(slug)}
    >
      <Text
        className={`${
          currentTab === slug ? "text-black font-bold" : "text-white"
        }`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
