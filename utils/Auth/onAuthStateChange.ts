import { supabase } from "../supabase";
import { router } from "expo-router";

export function onAuthStateChange() {
  // named export로 변경
  supabase.auth.onAuthStateChange((_event, session) => {
    if (session) {
      router.replace("/(tabs)");
    } else {
      // router.replace("/(auth)/landing");
      console.log("User is not logged in / onAuthStateChange");
    }
  });
}
