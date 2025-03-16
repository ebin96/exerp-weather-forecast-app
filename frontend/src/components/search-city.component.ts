import { Options, Vue } from "vue-class-component";

interface Place {
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
}

interface LatLng {
  lat: number;
  lng: number;
}

@Options({
  props: {},
})
export default class SearchCity extends Vue {
  selectedPlace: LatLng | null = null;

  placeChanged(place: Place): void {
    this.selectedPlace = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    this.$emit("placeChanged", this.selectedPlace);
  }

  handleMapClick(event: {
    latLng: { lat: () => number; lng: () => number };
  }): void {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.selectedPlace = { lat, lng };
    this.$emit("placeChanged", this.selectedPlace);
  }
}
