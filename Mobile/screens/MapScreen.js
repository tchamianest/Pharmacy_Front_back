import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import * as Icon from "react-native-feather";
import MapViewDirections from "react-native-maps-directions";
import { useRoute, useNavigation } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";
// import MapView, { Marker } from "react-native-maps";
import MapView, { Marker, Polyline } from "react-native-maps";
import { themecolors } from "../themes";
import { getlocation } from "../utils/locationFunction";
import axios from "axios";

export default function MapScreen() {
  const navigate = useNavigation();
  const { params } = useRoute();
  const el = params;
  const [location, setlocation] = useState({ lat: "", long: "" });
  const [seller, setSeller] = useState(null);
  const makePhoneCall = (phoneNumber) => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL:", err)
    );
  };
  useEffect(() => {
    const datawait = async () => {
      const data = await getlocation();
      if (data) {
        setlocation(data);
      }
    };
    datawait();
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://pharmacy-front-back.onrender.com/api/users"
        );
        if (response.data) {
          const data = response.data.Users;
          const name = data.find((ela) => ela.id === el.sellerId);

          setSeller(name);
        }
      } catch (error) {}
    };
    getUsers();
  }, []);

  const lat = Number(location.lat);
  const long = Number(location.long);
  const data = seller?.whereYouLive.split(",");
  if (data && data.length >= 1) {
    const latitude = parseFloat(data[0].split(":")[1]?.trim());
    const longitude = parseFloat(data[1].split(":")[1]?.trim());
    return (
      <View className="flex-1 ">
        {/* map view  */}
        {latitude && (
          <MapView
            initialRegion={{
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            className="flex-1"
            mapType="standard"
          >
            <Marker
              coordinate={{
                latitude: lat,
                longitude: long,
              }}
              title={"You "}
              description={"Where You stand here"}
              pinColor={themecolors.bgColor(1)}
              className="flex-1"
              mapType="standard"
            />
            <Polyline
              coordinates={[
                { latitude: lat, longitude: long },
                { latitude: latitude, longitude: longitude },
              ]}
              strokeColor="red"
              strokeColors="red"
              strokeWidth={3}
            />
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              title="Pharmacy"
              description={"Where are Pharmacy"}
              pinColor={"red"}
              className="flex-1"
              mapType="standard"
            />
          </MapView>
        )}

        <View className="rounded-t-3xl -mt-12 bg-white relative">
          <View className="flex-row justify-between px-5 pt-10">
            <View>
              <Text className="text-lg text-gray-700 font-semibold">
                Estimated Arrival time
              </Text>
              <Text className="text-3xl font-extrabold text-gray-700">
                Travel to red mark
              </Text>
              <Text className="mt-2 text-gray-700 font-semibold">
                Your can go as you want
              </Text>
            </View>
            <Image className="w-24 h-24" source={""} />
          </View>
          <View
            style={{ backgroundColor: themecolors.bgColor(0.8) }}
            className="p-2 flex-row justify-between  items-center rounded-full my-5 mx-2"
          >
            <View
              className="p-1 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
            >
              <Image
                className="h-16 w-16 rounded-full"
                source={
                  seller?.profileImage
                    ? { uri: seller.profileImage }
                    : require("../assets/icon.png")
                }
              />
            </View>
            <View className="text-lg font-bold text-white">
              <Text className="text-lg font-bold text-white">
                {seller?.lastName}
              </Text>
              <Text className="text-lg font-bold text-white">
                Call {seller?.lastName}
              </Text>
            </View>
            <View className="flex-row items-center space-x-3 mr-3">
              <TouchableOpacity
                onPress={() => makePhoneCall(seller?.phone)}
                className=" bg-white p-2 rounded-full"
              >
                <Icon.Phone
                  fill={themecolors.bgColor(1)}
                  stroke={themecolors.bgColor(1)}
                  strokeWidth={1}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigate.navigate("Home")}
                className=" bg-white p-2 rounded-full"
              >
                <Icon.X
                  fill={themecolors.bgColor(1)}
                  strokeWidth={1}
                  stroke="red"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
