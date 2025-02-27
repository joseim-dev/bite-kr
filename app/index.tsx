import { useState, useEffect } from "react";
import { View, Alert, Text, Pressable } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { getSession } from "@/utils/Auth/getSession"; // named import
import { onAuthStateChange } from "@/utils/Auth/onAuthStateChange"; // named import

export default function index() {
  const [retry, setRetry] = useState(0);
  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  const checkNetworkStatus = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const state = await NetInfo.fetch();

      if (state.isConnected) {
        setIsConnected(true);
        getSession(); // 제대로 함수 호출
        onAuthStateChange(); // 제대로 함수 호출
      } else {
        setIsConnected(false);
        showRetryAlert();
      }
    } catch (error) {
      console.error("Error checking network status:", error);
      showRetryAlert();
    }
  };

  const showRetryAlert = () => {
    Alert.alert("Network Error", "Please check your internet connection.");
  };

  useEffect(() => {
    console.log("Retry attempt: ", retry);
    checkNetworkStatus();
  }, [retry]);

  return (
    <View className="bg-black flex justify-center items-center h-full w-full">
      <View className="flex-row items-center ">
        <Text className="font-[Bold] text-[48px] text-libre-purple">Li</Text>
        <Text className="font-[Bold] text-[48px] text-white">bre</Text>
      </View>
    </View>
  );
}
