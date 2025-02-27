import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import PageHeader from "@/components/ui/Header/PageHeader";
import TitleMedium from "@/components/ui/TitleMedium";
import * as Notifications from "expo-notifications";
import { NotificationRequest } from "expo-notifications";
import useLocalNotifications from "@/hooks/Notification/useLocalNotification";

const notifications = () => {
  const [notifications, setNotifications] = useState<NotificationRequest[]>([]);
  const { readAllNotifications } = useLocalNotifications();
  useEffect(() => {
    const fetchPresentedNotifications = async () => {
      try {
        const presentedNotifications =
          await Notifications.getPresentedNotificationsAsync();

        // Notification 타입을 NotificationRequest 타입으로 변환
        const formattedNotifications = presentedNotifications.map(
          (notification) => ({
            identifier: notification.request.identifier,
            content: notification.request.content,
            trigger: notification.request.trigger,
          })
        );

        setNotifications(formattedNotifications);
        console.log(formattedNotifications[0]);
      } catch (error) {
        console.error("Failed to fetch presented notifications", error);
      }
    };

    fetchPresentedNotifications();
    readAllNotifications();
  }, []);

  return (
    <View className="w-full h-full flex items-center bg-black">
      <View className="w-[90%] h-full">
        <PageHeader />
        <TitleMedium title="Notifications" />
        <View className="h-[1px] bg-white mb-4 mt-2"></View>
        <FlatList
          data={notifications}
          renderItem={({ item }: { item: any }) => {
            //   const hour =
            //     Platform.OS === "ios"
            //       ? item.trigger?.dateComponents?.hour
            //       : item.trigger?.hour;
            //   const minute =
            //     Platform.OS === "ios"
            //       ? item.trigger?.dateComponents?.minute
            //       : item.trigger?.minute;
            return (
              <View className="w-full h-[70px] flex  justify-center border-b-[0.6px] border-libre-gray">
                <Text className="font-[SemiBold] text-white text-[18px]">
                  {item.content.title}
                </Text>
                <Text className="font-[regular] text-white text-[14px] mt-2">
                  {item.content.body}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default notifications;
