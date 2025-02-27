import { View, FlatList, Text, TouchableOpacity, Platform } from "react-native";
import * as Notifications from "expo-notifications";
import { NotificationRequest } from "expo-notifications";

import React, { useEffect, useState } from "react";
import ReminderItem from "./ReminderItem"; // ReminderItem 컴포넌트를 임포트합니다.
import notification from "@/app/(auth)/notificationSetting";
import SetNotificationModal from "@/components/Modal/SetNotificationModal";
import CustomButton from "@/components/ui/CustomButton";
import { Ionicons } from "@expo/vector-icons";

const ReminderList: React.FC = () => {
  // 올바른 타입 사용: NotificationRequest[]
  const [notifications, setNotifications] = useState<NotificationRequest[]>([]);
  const [update, setUpdate] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchScheduledNotifications = async () => {
      try {
        const notificationsData =
          await Notifications.getAllScheduledNotificationsAsync();
        setNotifications(notificationsData); // 상태 업데이트
        // console.log(notificationsData); // 수정: notifications가 아닌 notificationsData를 출력
      } catch (error) {
        console.error("Failed to fetch scheduled notifications", error);
      }
    };

    fetchScheduledNotifications();
  }, [update]);

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlatList
        data={notifications}
        renderItem={({ item }: { item: any }) => {
          const hour =
            Platform.OS === "ios"
              ? item.trigger?.dateComponents?.hour
              : item.trigger?.hour;
          const minute =
            Platform.OS === "ios"
              ? item.trigger?.dateComponents?.minute
              : item.trigger?.minute;

          return (
            <ReminderItem
              time={"7:00"}
              hour={hour}
              minute={minute}
              id={item.identifier}
              onUpdate={() => setUpdate(update + 1)}
            />
          );
        }}
        keyExtractor={(item) => item.identifier}
        ListFooterComponent={
          <View className="w-full items-center justify-center h-[60px] ">
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Ionicons name="add-circle-outline" size={36} color={"#787878"} />
            </TouchableOpacity>
          </View>
        }
      />

      <SetNotificationModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        onUpdate={() => {
          setUpdate(update + 1);
        }}
      />
    </View>
  );
};

export default ReminderList;
