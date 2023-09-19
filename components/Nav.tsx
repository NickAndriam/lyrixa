import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { MyIcon } from "./reusables";
import { colorTheme } from "../themes/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  Tabs,
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
  useRouter,
} from "expo-router";

export default function Nav() {
  const [currentTab, setCurrentTab] = useState<string>("/");
  const router = useRouter();
  return (
    <View className="flex flex-row items-center justify-center h-full w-full pb-5">
      <Tab
        icon={MaterialCommunityIcons}
        iconName="home-lightning-bolt-outline"
        active={false}
        name="Home"
        slug="/"
        onPress={() => router.push("/home")}
      />
      <Tab
        icon={MaterialIcons}
        iconName="favorite-outline"
        active={false}
        name="Favorites"
        slug="favorites"
        onPress={() => router.push(`/favorites`)}
      />
      <Tab
        icon={Ionicons}
        iconName="musical-note-sharp"
        active={true}
        name="Lyrics"
        onPress={() => router.push("/lyrics")}
        slug="lyrics"
      />
      <Tab
        icon={Ionicons}
        iconName="person-circle-outline"
        active={false}
        name="Account"
        slug="account"
        onPress={() => router.push("/account")}
      />
      <Tab
        icon={FontAwesome5}
        iconName="searchengin"
        active={false}
        name="Search"
        slug="search"
      />
    </View>
  );
}

const Tab = ({ icon, iconName, active, name, onPress = () => {}, slug }) => {
  return (
    <Pressable
      className={`w-16 px-2 flex items-center justify-between py-2 mx-[1.5px] 
    ${active ? "border-b-2 border-blue-500" : "border-none"}`}
      onPress={onPress}
    >
      <Text
        className={`my-1 text-gray-500 text-[11px]
      ${active ? "border-b-2 text-blue-500" : "text-gray-400"}`}
      >
        {name}
      </Text>
      <MyIcon
        autoActive={active}
        icon={icon}
        name={iconName}
        size={26}
        color="#D1D5DB"
        activeColor={colorTheme.blue}
      />
    </Pressable>
  );
};
