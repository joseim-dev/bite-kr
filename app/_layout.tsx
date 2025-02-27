import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

  const [loaded] = useFonts({
    Thin: require("../assets/fonts/Montserrat-Thin.ttf"),
    ExtraLight: require("../assets/fonts/Montserrat-ExtraLight.ttf"),
    Light: require("../assets/fonts/Montserrat-Light.ttf"),
    Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    ExtraBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    Black: require("../assets/fonts/Montserrat-Black.ttf"),
    ContentMedium: require("../assets/fonts/Georgia-Medium.ttf"),
    ContentRegular: require("../assets/fonts/Georgia-Regular.ttf"),
    ContentBold: require("../assets/fonts/Georgia-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="learning" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />

          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="notifications" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="light" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
