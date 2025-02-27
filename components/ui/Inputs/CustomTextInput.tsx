import { View, Text, TextInput } from "react-native";
import React from "react";

const CustomTextInput = ({
  title,
  placeholder,
  onChange,
  secureTextEntry = false,
}: {
  title: string;
  placeholder: string;
  onChange: (text: string) => void;
  secureTextEntry?: boolean;
}) => {
  return (
    <View className="w-full h-fit flex flex-col items-start justify-center">
      <Text className="text-white font-[Medium] text-[14px] mb-3">{title}</Text>
      <TextInput
        className="w-full h-[48px] px-4 rounded-md border-[1px] border-libre-gray text-white font-[Regular] text-[13px]"
        placeholder={placeholder}
        placeholderTextColor={"#aaa"}
        onChangeText={onChange} // onChangeText를 올바르게 사용
        autoCapitalize={"none"}
        secureTextEntry={secureTextEntry}
        autoComplete="off"
        spellCheck={false} // 맞춤법 검사 비활성화
      />
    </View>
  );
};

export default CustomTextInput;
