import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import CustomTextInput from "@/components/ui/Inputs/CustomTextInput";
import CustomButton from "@/components/ui/CustomButton";
import { Link } from "expo-router";

const forgotPW = () => {
  return (
    <View className="w-full h-full  items-center justify-center">
      <View className="flex-col items-center absolute top-[10%] w-[80%]">
        <Text className="font-[SemiBold] text-[28px] text-white">
          Forgot Password?
        </Text>
        <Text className="font-[Regular] text-[12px] text-libre-gray text-center mt-2">
          Submit your email address. {"\n"}We'll send you a link to reset your
          password.
        </Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-[90%] h-fit"
      >
        <CustomTextInput
          title={"Email"}
          placeholder="Email"
          onChange={() => {}}
        />
      </KeyboardAvoidingView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-[90%] h-fit mt-8 mb-5"
        keyboardVerticalOffset={20}
      >
        <View className="w-full h-[42px] ">
          <CustomButton text="Submit" type="gold" onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>

      <Link href={"/(auth)/signin"}>
        <Text className="text-white underline">Sign In</Text>
      </Link>
    </View>
  );
};

export default forgotPW;
