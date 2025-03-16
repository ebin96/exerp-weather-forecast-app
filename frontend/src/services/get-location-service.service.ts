import * as backendApi from "../shared/backend-api";

export interface LocationModel {
  country: string;
  place: string;
}

export default class LocationService {
  getLocationInfo(lat: number, lng: number): Promise<LocationModel> {
    return backendApi.get("location/details", { lat, lng });
  }
}
