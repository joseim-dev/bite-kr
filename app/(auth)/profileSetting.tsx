import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query"; // ✅ TanStack Query 추가
import CustomTextInput from "@/components/ui/Inputs/CustomTextInput";
import CustomButton from "@/components/ui/CustomButton";
import { router } from "expo-router";
import { useUpdateProfile } from "@/hooks/User/useUpdateProfile";
import { validateUsername } from "@/utils/Validation/validateUsername";
import { useGetUser } from "@/hooks/User/useGetUser";

const ProfileSetting = () => {
  // constants
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer not to say", value: "preferNotToSay" },
  ]);

  //hooks
  const { updateProfile, success, loading, error, data } = useUpdateProfile();
  const { user } = useGetUser();

  //functions
  const handleUsernameChange = (text: string) => {
    const { isValid, error } = validateUsername(text);
    setUsernameError(error);
    setUsername(text);
  };

  const handleSaveProfile = async () => {
    console.log(value, firstName, lastName, username);
    if (!username || !firstName || !lastName || !value) {
      Alert.alert("Please fill in all fields");
      return;
    }

    await updateProfile(user.id, {
      first_name: firstName,
      last_name: lastName,
      username: username,
      gender: value,
    });
  };

  return (
    <View className="w-full h-full items-center justify-center">
      <View className="flex-col items-center absolute top-[10%] w-[80%]">
        <Text className="font-[SemiBold] text-[28px] text-white">
          Profile Setting
        </Text>
        <Text className="font-[Regular] text-[12px] text-libre-gray text-center mt-2">
          Set your profile!
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-full items-center h-fit"
        keyboardVerticalOffset={20}
      >
        <View className="w-[90%] h-fit flex-row justify-between">
          <View className="w-[55%] h-[40px]">
            <CustomTextInput
              title={"First Name"}
              placeholder="Name"
              onChange={(text) => {
                setFirstName(text);
              }}
            />
          </View>
          <View className="w-[40%] h-[40px]">
            <CustomTextInput
              title={"Last Name"}
              placeholder="Name"
              onChange={(text) => {
                setLastName(text);
              }}
            />
          </View>
        </View>

        <View className="w-[90%] h-fit mt-8">
          <View className="w-full h-fit flex mt-5">
            <Text className="text-white font-[Medium] mb-3">Male/Female</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{
                backgroundColor: "#000000",
                borderColor: "#787878",
              }}
              labelStyle={{ color: "#FFFFFF", backgroundColor: "#000000" }}
              textStyle={{
                color: "#787878",
              }}
              containerStyle={{
                backgroundColor: "#000000",
              }}
            />
          </View>

          <View className="w-full h-fit flex-row justify-between mt-5">
            <CustomTextInput
              title={"Username"}
              placeholder="Username"
              onChange={(text) => handleUsernameChange(text)}
            />
          </View>

          {usernameError ? (
            <Text className="text-red-400 text-sm mt-2 font-[Regular]">
              {usernameError}
            </Text>
          ) : null}
          <View className="w-full h-[42px] mt-10">
            <CustomButton
              text="Save"
              type="purple"
              onPress={handleSaveProfile} // ✅ 수정된 saveProfile 함수 연결
              loading={loading}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ProfileSetting;
