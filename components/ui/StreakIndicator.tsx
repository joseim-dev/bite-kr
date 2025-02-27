import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DailyQuotelModal from "../Modal/DailyQuoteModal";

interface Item {
  key: string;
  day: string;
}

const StreakIndicator = () => {
  const [open, setOpen] = useState(false);
  const quote =
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs";

  return (
    <View className="w-full h-[80px] rounded-md border-[1px] border-libre-lightPurple mt-[18px] flex-row justify-between items-center px-3">
      <View className="flex justify-between w-[10%] items-center">
        <Ionicons name="flame" size={30} color={"#C09FF8"} />
        <Text className="font-[SemiBold] text-[10px] text-white mt-1">
          Day 1
        </Text>
      </View>

      <View className="w-[90%] h-full  justify-center pl-5">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setOpen(true);
          }}
        >
          <Text className="font-[Medium] leading-6 text-white text-[14px]">
            {quote}
          </Text>
        </TouchableOpacity>
      </View>

      <DailyQuotelModal
        visible={open}
        onClose={() => {
          setOpen(false);
        }}
        text={quote}
      />
    </View>
  );
};

export default StreakIndicator;
//
//
//
//
//
//
//
//
//

// import { View, Text, FlatList } from "react-native";
// import React from "react";
// import { Ionicons } from "@expo/vector-icons";

// interface Item {
//   key: string;
//   day: string;
// }

// const StreakIndicator = () => {
//   const data: Item[] = [
//     { key: "10", day: "Day 10" },
//     { key: "9", day: "Day 9" },
//     { key: "8", day: "Day 8" },
//     { key: "7", day: "Day 7" },
//     { key: "6", day: "Day 6" },
//     { key: "5", day: "Day 5" },
//     { key: "4", day: "Day 4" },
//     { key: "3", day: "Day 3" },
//     { key: "2", day: "Day 2" },
//     { key: "1", day: "Day 1" },
//   ];

//   const renderItem = ({ item, index }: { item: Item; index: number }) => {
//     // 첫 번째 아이템을 특별하게 렌더링
//     if (index === 0) {
//       return (
//         <View className="flex justify-center w-fit items-center mr-6">
//           <Ionicons name="flame" size={30} color={"#C09FF8"} />
//           <Text className="font-[SemiBold] text-[9px] text-white mt-1">
//             {item.day}
//           </Text>
//         </View>
//       );
//     }

//     // 나머지 아이템들은 일반적으로 렌더링
//     return (
//       <View className="flex justify-center w-fit items-center mr-6">
//         <View className="opacity-60">
//           <Ionicons name="flame" size={26} color={"#C09FF8"} />
//         </View>
//         <Text className="font-[SemiBold] text-[8px] text-white mt-1">
//           {item.day}
//         </Text>
//       </View>
//     );
//   };

//   return (
//     <View className="w-full h-[80px] rounded-md border-[1px] border-libre-lightPurple mt-[18px] flex-row justify-start items-center py-4 px-4">
//       <FlatList
//         data={data}
//         horizontal={true}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.key}
//         scrollEnabled={true}
//       />
//     </View>
//   );
// };

// export default StreakIndicator;
