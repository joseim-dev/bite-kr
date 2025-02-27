import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import useLocalNotifications from "@/hooks/Notification/useLocalNotification";

interface ReminderItemProps {
  time: string; // 시간 데이터를 받는 프롭
  hour: number;
  minute: number;
  id: string;
  onUpdate: () => void;
}

const ReminderItem: React.FC<ReminderItemProps> = ({
  time,
  hour,
  minute,
  id,
  onUpdate,
}) => {
  const { cancelScheduledNotificationById } = useLocalNotifications();

  const handlePress = () => {
    Alert.alert(
      "Cancel Reminder",
      "Press OK to cancel the reminder.",
      [
        {
          text: "OK",
          onPress: () => {
            cancelScheduledNotificationById(id);
            onUpdate();
          },
        },
        { text: "Close", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  // 10보다 작은 숫자 앞에 0 붙이기
  const formattedHour = String(hour).padStart(2, "0");
  const formattedMinute = String(minute).padStart(2, "0");

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      className="w-full h-[75px] bg-libre-lightPurple rounded-3xl px-5 flex-row items-center justify-between mb-4"
    >
      <View className="flex-row justify-start items-center">
        <View className="rounded-full bg-[#9378BF] w-[40px] aspect-square flex justify-center items-center mr-3">
          <Ionicons name="notifications-outline" size={23} color={"#000000"} />
        </View>

        <Text className="font-[Medium] text-[19px]">Reminder</Text>
      </View>
      <Text className="font-[Bold] text-[21px]">
        {formattedHour}:{formattedMinute}
      </Text>
    </TouchableOpacity>
  );
};

export default ReminderItem;
