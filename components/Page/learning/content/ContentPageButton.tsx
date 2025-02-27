import { View, Text, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import CustomButton from "@/components/ui/CustomButton";
import useCheckReadingById from "@/hooks/content/useCheckReadingById";
import useFinishReadingById from "@/hooks/content/useFinishReadingById";
import { router } from "expo-router";

const ContentPageButton = ({ id }: { id: string }) => {
  const {
    isDone,
    loading,
    data: checkData,
    checkReading,
  } = useCheckReadingById(id as string);

  const { loading: insertLoading, finishReading } = useFinishReadingById(
    id as string
  );

  // const [heart, setHeart] = useState(false);

  const handlePress = async () => {
    await finishReading();
    Alert.alert("Reading Finished");
    router.push("/(tabs)");
  };

  return (
    <View className="w-full h-[45px] fixed bottom-[4%] flex-row justify-between">
      <View className="w-full h-full">
        <CustomButton
          type="purple"
          text={isDone ? "Finished" : "Finish"}
          onPress={() => {
            handlePress();
          }}
          loading={loading || insertLoading}
          disabled={isDone}
        />
      </View>

      {/* 
하트 부분 추가한 부분
*/}

      {/* <View className="w-[83%] h-full">
      <CustomButton
        type="purple"
        text="Finish"
        onPress={() => {
          console.log("Clicked");
        }}
      />
    </View>

    <View className="w-fit h-full items-end">
      <TouchableOpacity
        activeOpacity={0.8}
        className="h-full aspect-square border-libre-purple rounded-full border-[1px] bg-black flex justify-center items-center"
        onPress={() => setHeart(!heart)}
      >
        {heart ? (
          <Ionicons name="heart" size={24} color={"#EB6556"} />
        ) : (
          <Ionicons name="heart-outline" size={24} color={"#EB6556"} />
        )}
      </TouchableOpacity>
    </View> */}
    </View>
  );
};

export default ContentPageButton;
