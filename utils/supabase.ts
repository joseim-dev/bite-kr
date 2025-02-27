import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iegllqjquubhzysiwqzs.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllZ2xscWpxdXViaHp5c2l3cXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NjIxODgsImV4cCI6MjA1NjAzODE4OH0.XD9iwh7UE_r0EkWF-XFfctsfXJF7QaJXks6xdBgDGd0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
