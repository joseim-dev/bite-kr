import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import PageHeader from "@/components/ui/Header/PageHeader";
import TitleLarge from "@/components/ui/TitleLarge";
import CustomButton from "@/components/ui/CustomButton";
import { Ionicons } from "@expo/vector-icons";

const savedContent = () => {
  const contentText = ` Leonardo da Vinci (1452–1519) was an Italian painter, draftsman, sculptor, architect, and engineer, whose genius epitomized the Renaissance humanist ideal more than any other figure of his time.
  
 His contributions extended beyond art to fields such as anatomy, geometry, astronomy, fluid mechanics, and military engineering, showcasing his extraordinary intellect and versatility.

 One of his most famous works, "The Last Supper" (1495–1498), is a masterpiece of composition and perspective, painted on the wall of the Santa Maria delle Grazie monastery in Milan. This painting captures the dramatic moment when Jesus announces that one of his disciples will betray him, with each apostle reacting uniquely, reflecting da Vinci’s deep understanding of human emotion and movement.

 Another iconic work, "Mona Lisa" (c. 1503–1519), is celebrated for its mysterious expression and masterful sfumato technique, which creates a soft, almost imperceptible transition between colors and tones. This portrait, housed in the Louvre Museum, remains one of the most recognized and studied paintings in history.
 
 Beyond his artistic achievements, da Vinci’s notebooks reveal his insatiable curiosity and groundbreaking scientific observations. He sketched flying machines, anatomical studies, hydraulic systems, and weaponry, many of which were centuries ahead of their time. His approach to knowledge was deeply rooted in observation and experimentation, making him a forerunner of the scientific method.

 Leonardo da Vinci’s legacy as a universal genius continues to inspire artists, scientists, and thinkers, cementing his place as one of the most influential figures in human history.`;

  //   const contentText = `**레오나르도 다 빈치**는 이탈리아의 화가, 소묘가, 조각가, 건축가, 그리고 엔지니어로서, 그의 천재성은 아마도 그 어떤 인물보다도 르네상스 인문주의 이상을 완벽하게 구현한 인물로 평가받는다.

  // 그의 작품 '최후의 만찬'(1495–98)과 '모나리자'(약 1503–19)는 르네상스 시대의 가장 대중적이고 영향력 있는 그림 중 하나로 꼽힌다.
  // 그의 노트에서는 과학적 탐구 정신과 기계적 창의성이 담겨 있으며, 이는 그의 시대를 훨씬 앞선 것이었다.`;

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
        <Text key={index} className="font-[Bold]">
          {boldText}
        </Text>
      );
      lastIndex = index + match[0].length; // 마지막 인덱스 업데이트
    });

    parts.push(text.substring(lastIndex)); // 마지막 일반 텍스트 추가

    return parts;
  };

  return (
    <View className="w-full h-full justify-start bg-black items-center">
      <PageHeader />

      <View className="w-[90%] h-[88%] justify-start pt-3 ">
        <ScrollView
          className="w-full h-full "
          showsVerticalScrollIndicator={false}
        >
          <View>
            <TitleLarge
              title={"Leonardo Da Vinci: The Renaissance of the 17th Century"}
              subTitle={"Today's Learning"}
              shorten={false}
            />
          </View>

          <View className="w-full aspect-square mt-6">
            <Image
              source={{
                uri: "https://www.singulart.com/blog/wp-content/uploads/2023/12/Leonardo-Da-Vinci-1024x1024.webp",
              }}
              className="w-full h-full rounded-lg"
            />
          </View>

          <View className="w-full mt-6">
            <Text className="font-[Regular] text-white text-[18px] tracking-normal leading-8 ">
              {renderContent(contentText)}
            </Text>
          </View>

          <View className="w-full h-[80px]"></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default savedContent;
