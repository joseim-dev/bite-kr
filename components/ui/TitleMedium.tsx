import { View, Text } from "react-native";
import React from "react";

const TitleMedium = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string; // 선택적 프롭으로 변경
}) => {
  return (
    <View className="w-full h-fit flex justify-between ">
      {subTitle && (
        <Text className="font-[Regular] text-libre-gray text-[16px] mb-[4px]">
          {subTitle}
        </Text>
      )}
      <Text
        className="font-[Bold] text-white text-[30px]"
        numberOfLines={2} // Limits to 2 lines
        ellipsizeMode="tail" // Truncates with "..."
      >
        {title}
      </Text>
    </View>
  );
};

export default TitleMedium;
