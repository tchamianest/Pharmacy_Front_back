import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function Users() {
  const navigate = useNavigation();
  const [activeCategolies, setActiveCategory] = useState(null);
  const [user, setUser] = useState();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("http:192.168.1.70:5000/api/users");

        if (response.data) {
          setUser(response.data.Users);
        }
      } catch (error) {}
    };
    getUsers();
  }, []);

  return (
    <View className="mt-4">
      <Text className="pl-3 mb-3 font-semibold text-lg">Sellers</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible min-h-[100px]"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {user?.map((el, index) => {
          let isActive = el.id === activeCategolies;
          let btnclass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textclass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => navigate.navigate("Profile", { ...el })}
                className={`p-1 rounded-full shadow bg-gray-200  ${btnclass}`}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={{ uri: el.profileImage }}
                />
              </TouchableOpacity>
              <Text className={`text-sm  ${textclass}`}>{el.lastName}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
