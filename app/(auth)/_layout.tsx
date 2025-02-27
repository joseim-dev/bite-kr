import { Tabs, Stack } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";

export default function _layout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="landing" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="notificationSetting" />
      <Stack.Screen name="profileSetting" />
      <Stack.Screen name="forgotPW" />

      <Stack.Screen name="interest" />
    </Stack>
  );
}
