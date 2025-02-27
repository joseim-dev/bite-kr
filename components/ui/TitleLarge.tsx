import { View, Text } from "react-native";
import React from "react";

const TitleLarge = ({
  title,
  subTitle,
  shorten = true,
}: {
  title: string;
  subTitle?: string; // 선택적 프롭으로 변경
  shorten?: boolean;
}) => {
  return (
    <View className="w-full h-fit flex justify-between">
      {subTitle && (
        <Text className="font-[Regular] text-libre-gray text-[18px] mb-[6px]">
          {subTitle}
        </Text>
      )}
      <Text
        className="font-[Bold] text-white text-[36px]"
        numberOfLines={shorten ? 2 : undefined} // Limits to 2 lines if shorten is true
        ellipsizeMode="tail" // Truncates with "..."
      >
        {title}
      </Text>
    </View>
  );
};

export default TitleLarge;
