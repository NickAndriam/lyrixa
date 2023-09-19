import { View } from "react-native";
import React from "react";
import TabIcon from "./reusables/TabIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LyricsTabs() {
  return (
    <View>
      {/* <TabIcon name="Zoom" /> */}
      {/* <TabIcon name="Speed" /> */}
      {/* <TabIcon name="Play" /> */}
      {/* <TabIcon name="Share" /> */}
      <TabIcon
        name="Zoom"
        icon={MaterialCommunityIcons}
        size={28}
        iconName="home-lightning-bolt-outline"
      />
      <TabIcon
        name="Zoom"
        icon={MaterialCommunityIcons}
        size={28}
        iconName="home-lightning-bolt-outline"
      />
    </View>
  );
}
