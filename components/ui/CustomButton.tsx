import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type ButtonType = "purple" | "gold"; // ✅ 타입을 명확히 지정

const CustomButton = ({
  type,
  text,
  onPress,
  loading,
  disabled,
}: {
  type: ButtonType;
  text: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
}) => {
  const colors: Record<ButtonType, [string, string]> = {
    purple: ["#7568ED", "#8256EB"],
    gold: ["#F9D16B", "#FAFDA6"],
  };

  return (
    <View className="bg-black">
      <TouchableOpacity
        className="w-full h-full "
        activeOpacity={0.8}
        onPress={onPress}
        disabled={loading || disabled} // 로딩 중일 때 비활성화
        style={{ opacity: loading || disabled ? 0.5 : 1 }} // 시각적으로도 비활성화 표시
      >
        <LinearGradient
          colors={colors[type]} // ✅ TypeScript가 유효성을 보장할 수 있음
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            {loading ? (
              <ActivityIndicator
                size="small"
                color={type === "gold" ? "black" : "white"}
              />
            ) : type === "gold" ? (
              <Text className="font-[Medium] text-black text-[18px]">
                {text}
              </Text>
            ) : (
              <Text className="font-[Medium] text-white text-[18px]">
                {text}
              </Text>
            )}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
