import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const PageHeader = () => {
  const router = useRouter();
  return (
    <View className="w-[90%] h-[12%] bg-black flex-row justify-between items-end pb-2">
      <View className="flex-row items-center ">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="items-start"
        >
          <Ionicons name="arrow-back-outline" size={28} color={"#ffffff"} />
        </TouchableOpacity>
      </View>

      {/* <Ionicons name="notifications-outline" size={22} color="white" /> */}
    </View>
  );
};

export default PageHeader;
