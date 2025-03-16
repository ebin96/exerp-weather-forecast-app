import axios from "axios";

export interface LocationModel {
  country: string;
  place: string;
}

export async function getLocationInfo(
  lat: number,
  lng: number
): Promise<LocationModel> {
  const API_URL = "https://nominatim.openstreetmap.org/reverse";
  const params = {
    lat: lat,
    lon: lng,
    format: "json",
    language: "en",
  };

  const response = await axios.get(API_URL, { params });
  const location = response.data;

  // Ensure that there are results before trying to access the data
  if (!location || !location.address) {
    throw new Error("Location not found");
  }

  return {
    country: location.address.country || "Unknown",
    place:
      location.address.suburb ||
      location.address.city ||
      location.address.state ||
      "Unknown",
  };
}
