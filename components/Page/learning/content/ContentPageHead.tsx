import { View, Image } from "react-native";
import React from "react";
import TitleLarge from "@/components/ui/TitleLarge";

interface ContentPageHeadProps {
  title: string;
  subTitle?: string;
  imageUrl: string;
}

const ContentPageHead: React.FC<ContentPageHeadProps> = ({
  title,
  subTitle,
  imageUrl,
}) => {
  return (
    <View>
      {/* 제목 및 부제목 */}
      <TitleLarge title={title} subTitle={subTitle} shorten={false} />

      {/* 이미지 */}
      <View className="w-full aspect-square mt-6">
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-full rounded-lg"
        />
      </View>
    </View>
  );
};

export default ContentPageHead;
