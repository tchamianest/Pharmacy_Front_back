import { View, Text, StatusBar, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import React from "react";
import Searchsections from "../components/Searchsections";
import { themecolors } from "../themes";
import Users from "../components/Users";

export default function HomePage() {
  return (
    <View className="h-full bg-red">
      <SafeAreaView className="bg-white ">
        <StatusBar
          barStyle="light-content"
          backgroundColor={themecolors.bgColor(1)}
        />
        {/* Top Sections  */}
        <View
          className=" py-3 px-5"
          style={{ backgroundColor: themecolors.bgColor(1) }}
        >
          <View className="flex-row gap-2 items-center ">
            <Image
              source={require(`../assets/images/Logo.png`)}
              className="w-5 h-7  rounded-full"
            />
            <Text className="text-white font-bold ">Pharmacy</Text>
          </View>
        </View>
        {/* Search icons  */}
        <View className="pt-5">
          <Searchsections />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Users />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
