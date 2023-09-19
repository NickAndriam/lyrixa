import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { MyIcon } from "./reusables";
import { colorTheme } from "../themes/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { router, usePathname, useRouter } from "expo-router";
import { formatPathname } from "../utils/formatter";
import TabIcon from "./reusables/TabIcon";

export default function Nav() {
  const router = useRouter();
  const global = usePathname();

  const Tab = ({ icon, iconName, name, slug }) => {
    const pathname = formatPathname(global);
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
      if (pathname === slug) setActive(true);
      else setActive(false);
    }, [pathname]);
    return (
      <TabIcon
        name={name}
        icon={icon}
        size={28}
        active={active}
        iconName={iconName}
        onPress={() => router.push(`/${slug}`)}
      />
    );
  };

  return (
    <View className="flex flex-row items-center justify-center h-full w-full pb-1">
      <Tab
        icon={MaterialCommunityIcons}
        iconName="home-lightning-bolt-outline"
        name="Home"
        slug="home"
      />
      <Tab
        icon={MaterialIcons}
        iconName="favorite-outline"
        name="Favorites"
        slug="favorites"
      />
      <Tab
        icon={Ionicons}
        iconName="musical-note-sharp"
        name="Lyrics"
        slug="lyrics"
      />
      <Tab
        icon={Ionicons}
        iconName="person-circle-outline"
        name="Account"
        slug="account"
      />
      <Tab
        icon={FontAwesome5}
        iconName="searchengin"
        name="Search"
        slug="search"
      />
    </View>
  );
}
