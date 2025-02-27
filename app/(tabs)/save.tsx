import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import CustomHeader from "@/components/ui/Header/CustomHeader";
import TitleMedium from "@/components/ui/TitleMedium";
import { Ionicons } from "@expo/vector-icons";
import SavedList from "@/components/Page/Save/SavedList/SavedList";

export default function TabTwoScreen() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[new Date().getMonth()];

  return (
    <View className="h-full w-full flex  bg-black items-center">
      <CustomHeader notification={false} />
      {/* <View className="bg-green-800">
        <Link href={"/(auth)/landing"}>
          <Text className="text-white">LandingPage</Text>
        </Link>

        <Link href={"/(auth)/notificationSetting"}>
          <Text className="text-white">Notification Setting</Text>
        </Link>
        <Link href={"/(auth)/profileSetting"}>
          <Text className="text-white">Profile Setting</Text>
        </Link>

        <Link href={"/(auth)/interest"}>
          <Text className="text-white">interst Setting</Text>
        </Link>
      </View> */}
      <View className="w-[90%] h-[89%] pt-3">
        <TitleMedium title={month} subTitle="Monthly Readings" />
        <View className="w-full h-[82%] pt-5">
          <SavedList />
        </View>
      </View>
    </View>
  );
}
