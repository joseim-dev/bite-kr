import { View, Text } from "react-native";
import React from "react";

const ContentPageBody = ({ text }: { text: string }) => {
  const renderContent = (text: string) => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;

    // matchAll을 사용하여 모든 일치 항목 찾기
    const matches = [...text.matchAll(boldRegex)];

    matches.forEach((match) => {
      const index = match.index || 0; // match.index가 undefined일 가능성 고려
      const boldText = match[1]; // ** 감싸진 텍스트
      parts.push(text.substring(lastIndex, index)); // 일반 텍스트 추가
      parts.push(
        <Text key={index} className="font-[ContentBold]">
          {boldText}
        </Text>
      );
      lastIndex = index + match[0].length; // 마지막 인덱스 업데이트
    });

    parts.push(text.substring(lastIndex)); // 마지막 일반 텍스트 추가

    return parts;
  };

  return (
    <View>
      <Text className="font-[ContentRegular] text-white text-[18px] tracking-normal leading-8 ">
        {renderContent(text)}
      </Text>
    </View>
  );
};

export default ContentPageBody;
