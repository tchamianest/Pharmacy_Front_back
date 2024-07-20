import axios from "axios";

export const reverseGeocode = async (lat, lng) => {
  const apiKey = "43a640ce88e2431c8be6197b4b470cb4";
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    if (data.results && data.results.length > 0) {
      return data.results[0].formatted;
    } else {
      return "Unknown location";
    }
  } catch (error) {
    console.error("Error during reverse geocoding: ", error);
    return "Error retrieving location";
  }
};
