import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const CustomHeader = ({ notification = true }: { notification?: boolean }) => {
  const router = useRouter();
  return (
    <View className="w-[90%] h-[11%] bg-black flex-row justify-between items-end ">
      <View className="flex-row items-center ">
        <Text className="font-[Bold] text-[24px] text-libre-purple">Li</Text>
        <Text className="font-[Bold] text-[24px] text-white">bre</Text>
      </View>

      {notification && (
        <TouchableOpacity onPress={() => router.push("/notifications")}>
          <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;
