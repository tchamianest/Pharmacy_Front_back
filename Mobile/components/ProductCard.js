import { View, Text } from "react-native";
import React from "react";
import { themecolors } from "../themes";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ items }) => {
  const navigation = useNavigation();
  console.log(items);
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...items })}
    >
      <View
        style={{ shadowColor: themecolors.bgColor(0.2), shadowRadius: 7 }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-64 rounded-l-3xl" source={items.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{items.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image source={require("../assets/star.png")} className="w-4 h-4" />
            <Text className="text-xs">
              <Text className="text-green-700">{items.stars}</Text>
              <Text className="text-gray-700">
                ({items.reviews} reviews) .{" "}
                <Text className="font-semibold">{items.type} </Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs">
              NearBy . {items.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default ProductCard;
