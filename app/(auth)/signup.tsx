import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "@/components/ui/Inputs/CustomTextInput";
import CustomButton from "@/components/ui/CustomButton";
import { Link } from "expo-router";
import { signUpWithEmail } from "@/utils/Auth/signUpWithEmail"; // ✅ 유틸리티 함수 import

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [loading, setLoading] = useState(false); // 🔹 로딩 상태 추가

  return (
    <View className="w-full h-full items-center justify-center">
      <View className="flex-row items-center absolute top-[10%]">
        <Text className="font-[Bold] text-[40px] text-libre-purple">Li</Text>
        <Text className="font-[Bold] text-[40px] text-white">bre</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-[90%] h-fit"
      >
        <CustomTextInput
          title="Email"
          placeholder="Please enter a valid email"
          onChange={(text) => setEmail(text)}
        />
      </KeyboardAvoidingView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-[90%] h-fit mt-5"
      >
        <CustomTextInput
          title="Password"
          placeholder="Enter Password"
          onChange={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-[90%] h-fit mt-5"
      >
        <CustomTextInput
          title="Password Confirmation"
          placeholder="Please confirm your password"
          onChange={(text) => setConfirmPW(text)}
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-[90%] h-fit mt-8"
        keyboardVerticalOffset={20}
      >
        <View className="w-full h-[42px] mb-5">
          {loading ? ( // 🔹 로딩 중이면 ActivityIndicator 표시
            <ActivityIndicator size="large" color="#FFD700" />
          ) : (
            <CustomButton
              text="Sign Up"
              type="gold"
              onPress={() =>
                signUpWithEmail(email, password, confirmPW, setLoading)
              }
              loading={loading} // 🔹 로딩 상태 전달
            />
          )}
        </View>
      </KeyboardAvoidingView>

      <Link href={"/(auth)/signin"}>
        <Text className="text-white underline">Already a member?</Text>
      </Link>
    </View>
  );
};

export default Signup;
