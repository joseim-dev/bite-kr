import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "@/components/ui/Inputs/CustomTextInput";
import CustomButton from "@/components/ui/CustomButton";
import { Link } from "expo-router";
import { supabase } from "@/utils/supabase";

const signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View className="w-full h-full  items-center justify-center">
      <View className="flex-row items-center absolute top-[10%]">
        <Text className="font-[Bold] text-[40px] text-libre-purple">Li</Text>
        <Text className="font-[Bold] text-[40px] text-white">bre</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-[90%] h-fit"
      >
        <CustomTextInput
          title={"Email"}
          placeholder="Email"
          onChange={(text) => {
            setEmail(text);
          }}
        />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-[90%] h-fit mt-5"
      >
        <CustomTextInput
          title={"Password"}
          placeholder="Enter Password"
          onChange={(text) => {
            setPassword(text);
          }}
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-[90%] h-fit mt-8 mb-5"
        keyboardVerticalOffset={20}
      >
        <View className="w-full h-[42px] ">
          <CustomButton
            text="Sign In"
            type="gold"
            onPress={() => {
              signInWithEmail();
            }}
          />
        </View>
      </KeyboardAvoidingView>

      <Link href={"/(auth)/forgotPW"}>
        <Text className="text-white underline">Forgot PW?</Text>
      </Link>
    </View>
  );
};

export default signin;
