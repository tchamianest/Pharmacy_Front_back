import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import * as Icon from "react-native-feather";
import { getlocation } from "../utils/locationFunction";
import { themecolors } from "../themes";
import { reverseGeocode } from "../utils/ApiReverse";

export default function Searchsections() {
  const [nameLocation, setNameLocation] = useState();
  useEffect(() => {
    const handleLocation = async () => {
      const location = await getlocation();
      const locationName = await reverseGeocode(location.lat, location.long);
      setNameLocation(locationName.split(",")[1]);
    };
    handleLocation();
  }, []);
  return (
    <View className="flex-row items-center space-x-2 px-4 pb-2">
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-400">
        <Icon.Search height={25} width={25} stroke="gray" />
        <TextInput placeholder="Enter Medical" className="ml-2 flex-1" />
        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-200">
          <Icon.MapPin height={20} width={20} stroke="gray" />
          <Text className="text-gray-600 text-[10px]">{nameLocation}</Text>
        </View>
      </View>
      {/* filter button  */}
      <TouchableOpacity
        style={{ backgroundColor: themecolors.bgColor(1) }}
        className="p-3 bg-gray-300 rounded-full"
      >
        <Icon.Search height={25} width={20} stroke="white" />
      </TouchableOpacity>
    </View>
  );
}
