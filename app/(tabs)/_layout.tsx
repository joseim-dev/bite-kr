import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/utils/supabase";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#C09FF8",
        headerShown: false,

        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            backgroundColor: "black",
            borderTopWidth: 0,
          },
          default: {
            backgroundColor: "black",
            borderTopWidth: 0,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons size={27} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons size={27} name="bookmark" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
