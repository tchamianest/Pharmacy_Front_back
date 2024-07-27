import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themecolors } from "../themes";
import { StatusBar } from "expo-status-bar";
import Users from "../components/Users";

export default function Profile() {
  const navigate = useNavigation();
  const { params } = useRoute();
  const makePhoneCall = (phoneNumber) => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL:", err)
    );
  };
  const el = params;

  return (
    <View className="flex-1 ">
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: el.profileImage }}
            className="h-[400px] w-full object-cover"
          />
          <TouchableOpacity
            className="absolute top-9 left-3 bg-gray-50 rounded-full shadow"
            onPress={() => navigate.goBack()}
          >
            <Icon.ArrowLeft stroke={themecolors.bgColor(1)} strokeWidth={3} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6 pb-6"
        >
          <View className="px-5">
            <Text className="text-2xl font-bold capitalize">
              {el.firstName}
              {" " + el.lastName}
            </Text>
            <View className="flex-row space-x-3 my-1">
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-700 text-xs">
                  NearBy .{el.location}
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-row px-5">
            <Text className="font-bold">Phone :</Text>
            <Text>{" " + el.phone}</Text>
          </View>
          <View className="flex-row px-5">
            <Text className="font-bold">Email :</Text>
            <Text>{" " + el.email}</Text>
          </View>
        </View>
        <View className="bg-white w-full pb-5 ">
          <View className="flex-row justify-between bg-gray-100 shadow-md rounded-full px-2 mx-2 py-3 items-center space-x-3 mr-3">
            <TouchableOpacity
              onPress={() => makePhoneCall(el.phone)}
              className=" bg-blue-400  p-4 rounded-full"
            >
              <Icon.Phone fill="white" stroke="white" strokeWidth={1} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate.navigate("Home")}
              className=" bg-red-600 p-4 rounded-full"
            >
              <Icon.X
                fill={themecolors.bgColor(1)}
                strokeWidth={3}
                stroke="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="pb-10 bg-white mt-5">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <Users />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
