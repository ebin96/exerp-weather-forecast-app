import { Options, Vue } from "vue-class-component";
import LocationService from "@/services/get-location-service.service";
import { Inject } from "vue-property-decorator";

interface Place {
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
  formatted_address: string;
}

interface LatLng {
  lat: number;
  lng: number;
}

@Options({
  validationError: {
    type: String,
    default: "",
  },
})
export default class SearchCity extends Vue {
  @Inject("locationService")
  public locationService!: LocationService;

  selectedPlace: LatLng | null = null;
  validationError: string | null = "";

  async getLocationInfo(lat: number, lng: number) {
    if (lat && lng) {
      const res = await this.locationService.getLocationInfo(lat, lng);
      let locationName = "";

      // Check if country is "Unknown"
      if (res.country === "Unknown") {
        locationName = res.place; // If country is unknown, emit place
      } else if (res.place === "Unknown") {
        locationName = ""; // If place is unknown, emit empty string
      } else {
        locationName = `${res.place}, ${res.country}`; // Else emit place and country
      }

      // Emit the location name
      this.$emit("updateLocationName", locationName);
    }
  }

  placeChanged(place: Place): void {
    if (place.formatted_address && place.geometry) {
      this.selectedPlace = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      this.$emit("placeChanged", this.selectedPlace);
      this.$emit("updateLocationName", place.formatted_address);
      this.validationError = "";
    } else {
      this.validationError =
        "Location input is invalid. Please enter a valid location.";
    }
  }

  handleMapClick(event: {
    latLng: { lat: () => number; lng: () => number };
  }): void {
    this.validationError = "";
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.selectedPlace = { lat, lng };
    this.$emit("placeChanged", this.selectedPlace);
    this.getLocationInfo(lat, lng);
  }

  isLocationValid() {
    return this.validationError !== "";
  }
}
