import { StatusBar } from "expo-status-bar";
import { View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { Search } from "../components/reusables/Search";
import Popular from "../components/Popular";
import SongCard from "../components/reusables/cards/SongCard";
import SafeView from "../components/layout/SafeView";
import Title from "../components/reusables/text/Title";
import dummyArtists from "../constants/dummyArtists.json";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import Spacer from "../components/reusables/Spacer";
import ArtistCard from "../components/reusables/cards/ArtistCard";

export default function Home() {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#216EBB", "#0C1317", "#0C1317"]}
        locations={[0, 0.25, 0.9]}
        className="h-full w-full bg-black px-4"
      >
        <View className="flex-1 justify-start pt-10">
          {/* Hi Nick */}
          <View className="flex-row items-center justify-between w-full pt-5">
            <Title
              title="Hey Nick,"
              className="text-[30px] font-bold text-start"
            />
            <TouchableOpacity>
              <Feather name="settings" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Main */}
          <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
            {/* Popular Songs */}
            <Popular />
            <Spacer />

            {/* Popular Artists */}
            <Title capitalize={false} title="Popular Artists" />
            <FlatList
              data={dummyArtists}
              numColumns={2}
              renderItem={({ item }) => (
                <SongCard
                  title={item.name}
                  subtitle={item.genre}
                  image={item.image}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{
                paddingHorizontal: 5,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            />

            {/* More Artists */}
            <Spacer />
            <Title capitalize={false} title="Explore More Artists..." />
            <FlatList
              data={dummyArtists}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ArtistCard
                  title={item.name}
                  subtitle={item.genre}
                  image={require(`../assets/img/artists/3.jpg`)}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <Spacer className="my-20" />
          </ScrollView>
        </View>
      </LinearGradient>
    </>
  );
}
