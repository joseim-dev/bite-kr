import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useUpdateInterest } from "@/hooks/User/useUpdateInterest";
import React, { useState } from "react";
import CustomTextInput from "@/components/ui/Inputs/CustomTextInput";
import CustomButton from "@/components/ui/CustomButton";
import { Link } from "expo-router";
import { useGetUser } from "@/hooks/User/useGetUser";

const interest = () => {
  const { updateInterest, success, loading, error, data } = useUpdateInterest();
  const { user } = useGetUser();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "History", value: "history" },
    { label: "Philosophy", value: "philosophy" },
    { label: "Science", value: "science" },
    { label: "Psychology", value: "psychology" },
    { label: "Astronomy", value: "astronomy" },
    { label: "Mathematics", value: "math" },
    { label: "Literature", value: "literature" },
    { label: "Geography", value: "geography" },
    { label: "Political Science", value: "politics" },
    { label: "Anthropology", value: "anthropology" },
    { label: "Ethics", value: "ethics" },
    { label: "Linguistics", value: "linguistics" },
    { label: "Art", value: "art" },
    { label: "Music", value: "music" },
  ]);

  const handleSaveInterest = async () => {
    console.log(value);
    if (!value) {
      Alert.alert("Please fill in all fields");
      return;
    }

    await updateInterest(user.id, {
      interest: value,
    });
  };

  return (
    <View className="w-full h-full  items-center justify-center">
      <View className="flex-col items-center absolute top-[10%] w-[80%]">
        <Text className="font-[SemiBold] text-[28px] text-white">
          Field of Interest
        </Text>
        <Text className="font-[Regular] text-[12px] text-libre-gray text-center mt-2">
          What are you mostly interested in? {"\n"} This will help us to provide
          better content!
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-[90%] h-fit flex  mt-5"
      >
        <Text className="text-white font-[Medium] mb-3">
          Field of interest (3 Max)
        </Text>
        <DropDownPicker
          multiple={true}
          min={0}
          max={3}
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
      </KeyboardAvoidingView>
      <View className="w-[90%] h-[42px] mt-10">
        <CustomButton
          text="Save"
          type="purple"
          onPress={() => {
            handleSaveInterest();
          }}
          loading={loading}
        />
      </View>
    </View>
  );
};

export default interest;
