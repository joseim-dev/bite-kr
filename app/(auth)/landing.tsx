import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

const landing = () => {
  const router = useRouter();

  return (
    <View className="w-full h-full  items-center ">
      <View className="flex justify-between items-center h-[100px] top-[11%]">
        <Text className="text-white font-[Bold] text-[40px]">
          Invest 5 min.
        </Text>
        <Text className=" font-[Bold] text-[40px] text-[#F9D16B]">
          Get Smarter.
        </Text>
      </View>
      <View className="w-[95%] h-[60%] absolute bottom-[12%] flex items-center  justify-end">
        <Image
          source={require("@/assets/images/landing.png")}
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>

      <View className="w-[80%] h-[50px] absolute bottom-[10%]">
        <CustomButton
          text="Get Started"
          type="gold"
          onPress={() => {
            router.push("/(auth)/signup");
          }}
        />
      </View>

      <Link href={"/(auth)/signin"} className="absolute bottom-[5%]">
        <Text className="text-white font-bold underline">
          Already a member?
        </Text>
      </Link>
    </View>
  );
};

export default landing;
