import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { themecolors } from "../themes";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

export default function SingleProduct() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const data = [{}, {}, {}];
  const el = params;
  return (
    <View className="bg-white flex-1">
      {/* back button  */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themecolors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2 "
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl mb-4 capitalize text-blue-400">
            {el.productName}
          </Text>
          <View>
            <Image
              source={{ uri: el.productPictures }}
              style={{ height: 400 }}
            />
          </View>
          <View
            // style={{ backgroundColor: themecolors.bgColor(0.1) }}
            className="mt-4 p-4"
          >
            <Text className=" ml-5 text-sm text-gray-500">
              {el.productDescription}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{ backgroundColor: themecolors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between ">
          <Text className="text-gray-700 font-extrabold">Product Location</Text>
          <Text className="text-gray-700 text-sm">{el.locationName}</Text>
        </View>
        <View className="flex-row justify-between ">
          <Text className="text-gray-700 font-extrabold">Price</Text>
          <Text className="text-gray-700 text-sm">{el.productPrice}</Text>
        </View>
        <View className="flex-row justify-between ">
          <Text className="text-gray-700 font-extrabold">Name</Text>
          <Text className="text-gray-700 font-extrabold text-sm">
            {el.productName}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("MapScreen", { ...el })}
            style={{ backgroundColor: themecolors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              View Direction
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
