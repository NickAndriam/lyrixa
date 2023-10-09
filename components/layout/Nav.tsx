import { Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { formatPathname } from "../../utils/formatter";
import TabIcon from "../reusables/TabIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colorTheme } from "../../themes/color";
import Logo from "../reusables/Logo";

export default function Nav() {
  const router = useRouter();
  const global = usePathname();

  const Tab = ({ icon, iconName, name, slug, size = 24 }) => {
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
        size={size}
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
        iconName="library-music"
        name="Favorites"
        slug="favorites"
        size={22}
      />
      <Logo />

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
