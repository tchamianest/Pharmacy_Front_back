import { View, Text, StatusBar, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import React from "react";
import Searchsections from "../components/Searchsections";
import { themecolors } from "../themes";
import Users from "../components/Users";
import ProductList from "../components/ProductList";

export default function HomePage() {
  return (
    <View className="h-full bg-red">
      <SafeAreaView className=" ">
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
        <View className=" pb-3">
          <View className="pt-5 ">
            <Searchsections />
          </View>
        </View>
        <View className="pt-3 mt-4 ">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View className="bg-white mb-2">
              <Users />
            </View>
            <View className="bg-white mt-1 h-full pb-24 flex-1">
              <View className="mt-4">
                <ProductList />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
