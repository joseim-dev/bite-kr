import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const SavedListItem = ({
  title,
  readingId,
}: {
  title: string;
  readingId: string;
}) => {
  const handlePress = () => {
    router.push(`/learning/content?id=${readingId}`);
  };
  return (
    <View className="w-full h-[60px]  px-4 flex-row  items-center border-b-[0.8px] border-libre-gray">
      <View className="w-[10%] ">
        <Ionicons size={18} name="bookmark-outline" color="#FFFFFF" />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        className="w-[90%]  flex-row items-center pl-3"
        onPress={() => {
          handlePress();
        }}
      >
        <Text
          className="font-[Medium] text-white text-lg"
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavedListItem;
