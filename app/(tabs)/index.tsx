import CustomButton from "@/components/ui/CustomButton";
import CustomHeader from "@/components/ui/Header/CustomHeader";
import TitleLarge from "@/components/ui/TitleLarge";
import TitleMedium from "@/components/ui/TitleMedium";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import StreakIndicator from "@/components/ui/StreakIndicator";
import ReminderList from "@/components/ui/Reminder/ReminderList";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { supabase } from "@/utils/supabase";
import { getSession } from "@/utils/Auth/getSession";
import { useGetTodayReading } from "@/hooks/content/useGetTodayReading";

export default function HomeScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const handleSignOut = () => {
    supabase.auth.signOut();
    // router.replace("/(auth)/landing");
    getSession();
  };

  const { data, loading, error, getTodayReading } = useGetTodayReading();

  useEffect(() => {
    getTodayReading();
    // console.log("Fetched Data:", data.reading_id);
  }, []);

  if (loading === true) {
    return (
      <View className="flex justify-center items-center h-full w-full">
        <ActivityIndicator size="small" color="#ffffff" />
      </View>
    );
  }
  return (
    <View className="h-full w-full flex justify-start bg-black items-center">
      <CustomHeader />
      <View className="w-[90%] h-[89%] pt-3">
        <FlatList
          data={[]}
          renderItem={null}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View className="w-full h-full">
              {/*MainSection*/}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  router.push(`/learning/content?id=${data.reading_id}`);
                }}
              >
                <TitleLarge title={data.title} subTitle={data.subtitle} />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                className="w-full aspect-square mt-6"
                onPress={() => {
                  router.push(`/learning/content?id=${data.reading_id}`);
                }}
              >
                <Image
                  source={{
                    uri: data.image_url,
                  }}
                  className="w-full h-full rounded-lg"
                />
              </TouchableOpacity>

              {/*StreakSection*/}
              {/* <View className="mt-[30px]">
                <TitleMedium
                  title="Streak: 3 day(s)"
                  subTitle="You're grit on learning."
                />
              </View>

              <StreakIndicator /> */}

              {/* Notification Section */}
              <View className="flex-row justify-between items-end mt-[40px]">
                <Text className="font-[Bold] text-white text-[30px]">
                  We'll remind you
                </Text>
              </View>
              <ReminderList />

              <View className="flex-row justify-between items-end mt-[20px]">
                <Text className="font-[Bold] text-white text-[30px]">
                  Setting
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  handleSignOut();
                }}
                className="flex-row justify-between items-end mt-[20px]"
              >
                <Text className="font-[Medium] text-[16px] text-red-400">
                  Sign out
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  Alert.alert("Account Deletion Request complete.");
                }}
                className="mt-2"
              >
                <Text className="font-[Medium] text-[16px] text-red-400">
                  Delete Account
                </Text>
              </TouchableOpacity>
              <View className="w-full h-[120px]"></View>
            </View>
          }
        />
      </View>
    </View>
  );
}
