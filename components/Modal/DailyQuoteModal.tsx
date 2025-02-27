import {
  View,
  Text,
  Modal,
  Touchable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/ui/CustomButton";
import DatePicker from "react-native-date-picker";
import useLocalNotifcation from "@/hooks/Notification/useLocalNotification";

const DailyQuotelModal = ({
  visible,
  onClose,
  text,
}: {
  visible: boolean;
  onClose: () => void;
  text: string;
}) => {
  const [date, setDate] = useState(new Date());

  const { triggerDailyNotification } = useLocalNotifcation();

  const onPress = () => {
    triggerDailyNotification(
      "Daily Reminder",
      "It's time to learn!",
      date.getHours(),
      date.getMinutes()
    );

    onClose();
  };

  return (
    <Modal visible={visible}>
      <View className="w-full h-full  items-center justify-center bg-black">
        <View className="w-[90%]">
          <Text className="font-[Medium] text-[18px] text-white text-justify">
            {text}
          </Text>
        </View>

        <TouchableOpacity onPress={onClose}>
          <Text className="text-libre-gray font-[Medium] pt-12 underline text-md">
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DailyQuotelModal;
