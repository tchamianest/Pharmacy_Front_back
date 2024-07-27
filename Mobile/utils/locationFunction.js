import * as Location from "expo-location";

export const getlocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    throw new Error("Permission to access location was denied");
  }

  let location = await Location.getCurrentPositionAsync({});
  return {
    lat: location.coords.latitude,
    long: location.coords.longitude,
  };
};
