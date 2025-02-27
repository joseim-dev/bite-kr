import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import DatePicker from "react-native-date-picker";
import useLocalNotifcation from "@/hooks/Notification/useLocalNotification";

import React, { useState } from "react";
import CustomButton from "@/components/ui/CustomButton";
import { Link } from "expo-router";
import { router } from "expo-router";
const notification = () => {
  const [date, setDate] = useState(new Date());

  const { triggerDailyNotification } = useLocalNotifcation();

  const onPress = () => {
    triggerDailyNotification(
      "Libre",
      "It's time to learn!",
      date.getHours(),
      date.getMinutes()
    );
    router.replace("/(tabs)");
  };

  return (
    <View className="w-full h-full  items-center justify-center">
      <View className="flex-col items-center absolute top-[10%] w-[80%]">
        <Text className="font-[SemiBold] text-[28px] text-white">
          We'll Remind you!
        </Text>
        <Text className="font-[Regular] text-[12px] text-libre-gray text-center mt-2">
          This notifcaiton is not for marketing purposes.{"\n"} It will only
          notify you for daily learning!
        </Text>
      </View>
      <DatePicker mode={"time"} date={date} onDateChange={setDate} />

      <View className="w-[65%] h-[40px] mt-8">
        <CustomButton
          text="Save"
          type="purple"
          onPress={() => {
            onPress();
          }}
        />
      </View>
    </View>
  );
};

export default notification;
