import { Options, Vue } from "vue-class-component";
import SearchCity from "@/components/SearchCity.vue";
import WeatherForecast from "@/components/WeatherForecast.vue";

@Options({
  components: {
    SearchCity,
    WeatherForecast,
  },
})
export default class HomeView extends Vue {
  selectedPlace: { lat: number; lng: number } | null = null;
  locationName: string | null = null;
  placeChanged(data: { lat: number; lng: number }) {
    this.selectedPlace = {
      lat: data.lat,
      lng: data.lng,
    };
  }

  updateLocationName(formatted_address: string) {
    this.locationName = formatted_address;
  }
}
