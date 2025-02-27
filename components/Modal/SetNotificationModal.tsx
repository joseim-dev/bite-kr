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

const SetNotificationModal = ({
  visible,
  onClose,
  onUpdate,
}: {
  visible: boolean;
  onClose: () => void;
  onUpdate: () => void;
}) => {
  const [date, setDate] = useState(new Date());

  const { triggerDailyNotification } = useLocalNotifcation();

  const onPress = () => {
    triggerDailyNotification(
      "Libre",
      "It's time to learn!",
      date.getHours(),
      date.getMinutes()
    );

    onClose();
    onUpdate();
  };

  return (
    <Modal visible={visible}>
      <View className="w-full h-full  items-center justify-center bg-black">
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
          <CustomButton text="Add" type="purple" onPress={onPress} />
        </View>

        <TouchableOpacity onPress={onClose}>
          <Text className="text-libre-gray font-[Medium] pt-5 underline text-md">
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SetNotificationModal;
