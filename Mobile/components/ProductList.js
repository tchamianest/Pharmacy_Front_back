import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { themecolors } from "../themes";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function ProductList() {
  const navigate = useNavigation();
  const [activeCategolies, setActiveCategory] = useState(null);
  const [product, setProduct] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://pharmacy-front-back.onrender.com/api/product"
        );

        if (response.data) {
          setProduct(response.data.data);
        }
      } catch (error) {}
    };
    getUsers();
  }, []);
  return (
    <View className="px-3 ">
      <Text className="font-bold mt-5 mb-10 text-[18px] text-blue-400">
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className=" overflow-auto min-h-[100px] "
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {product?.map((el, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("SingleProduct", { ...el })}
          >
            <View className="w-[250px] mr-3 h-[340px] border shadow-md  border-gray-200 mb-1 ">
              <View>
                <Image
                  style={styles.Image}
                  source={{
                    uri: el.productPictures,
                  }}
                  className="min-w-full"
                />
              </View>
              <View
                className="px-2 flex-1 justify-center border-t-2 border-white   rounded-e-sm"
                style={{ backgroundColor: themecolors.bgColor(0.8) }}
              >
                <Text className="text-white font-semibold capitalize">
                  {el.productName}
                </Text>
                <Text className="text-white font-semibold">
                  Price :{" "}
                  <Text className=" font-medium ">{el.productPrice}</Text>
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  Image: {
    width: "100%",
    height: 260,
    minWidth: "100%", // Note: 'minWidth' and other percentage-based styles may not work as expected in React Native
  },
});
