import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import PageHeader from "@/components/ui/Header/PageHeader";
import TitleLarge from "@/components/ui/TitleLarge";
import CustomButton from "@/components/ui/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import useGetReadingById from "@/hooks/content/useGetReadingById";
import useCheckReadingById from "@/hooks/content/useCheckReadingById";
import ContentPageButton from "@/components/Page/learning/content/ContentPageButton";
import ContentPageBody from "@/components/Page/learning/content/ContentPageBody";
import ContentPageHead from "@/components/Page/learning/content/ContentPageHead";

const content = () => {
  const { id } = useLocalSearchParams();

  const { data, loading, error } = useGetReadingById(id as string);

  if (loading === true) {
    return (
      <View className="flex justify-center items-center h-full w-full">
        <ActivityIndicator size="small" color="#ffffff" />
      </View>
    );
  }

  return (
    <View className="w-full h-full justify-start bg-black items-center">
      <PageHeader />

      <View className="w-[90%] h-[88%] justify-start pt-3 ">
        <ScrollView
          className="w-full h-full "
          showsVerticalScrollIndicator={false}
        >
          <ContentPageHead
            title={data.title}
            subTitle={data.subtitle}
            imageUrl={data.image_url}
          />

          <View className="w-full mt-6 mb-[80px]">
            <ContentPageBody text={data.content as string} />
          </View>
        </ScrollView>

        <ContentPageButton id={id as string} />
      </View>
    </View>
  );
};

export default content;
