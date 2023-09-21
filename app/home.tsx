import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import { Search } from "../components/Search";
import Popular from "../components/Popular";
import SongCard from "../components/SongCard";

export default function Home() {
  return (
    <View className="flex-1 justify-start items-center bg-primary pt-10">
      <StatusBar style="light" />
      <Search />
      <ScrollView
        className="w-full px-5 pb-24"
        showsVerticalScrollIndicator={false}
      >
        <Popular />
        <Text className="text-2xl mb-4 w-full mt-10 text-white">
          RECENT SEARCHES
        </Text>

        {[1, 2, 3, 4].map((list, index) => {
          return <SongCard key={index} />;
        })}
      </ScrollView>
    </View>
  );
}
