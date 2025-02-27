import { View, FlatList } from "react-native";
import React from "react";
import SavedListItem from "./SavedListItem";
import { useGetMonthlyReading } from "@/hooks/content/useGetMonthlyReading";

const SavedList = () => {
  const { data, loading, error } = useGetMonthlyReading();

  return (
    <View className="w-full h-full ">
      <FlatList
        data={data}
        keyExtractor={(item) => item.date}
        renderItem={(
          { item } // item.item이 아니라 item으로 직접 받음
        ) => <SavedListItem title={item.title} readingId={item.reading_id} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SavedList;
