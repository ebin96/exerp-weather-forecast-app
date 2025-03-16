import WeatherService from "@/services/weather-service.service";
import { ErrorModel } from "@/shared/backend-api";
import { Options, Vue } from "vue-class-component";
import { Inject, Watch } from "vue-property-decorator";

export interface ForecastModel {
  latitude: number;
  longitude: number;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: Date;
  };

  current_weather_units: {
    time: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    weathercode: string;
  };
}

@Options({
  props: {
    selectedPlace: Object as () => { lat: number; lng: number },
    locationName: String,
  },
})
export default class WeatherForecast extends Vue {
  @Inject("weatherService")
  public weatherService!: WeatherService;

  selectedPlace!: { lat: number; lng: number };
  locationName!: string;

  error: ErrorModel | null = null;
  forecastData: ForecastModel | null = null;

  @Watch("selectedPlace", { deep: true, immediate: true })
  async onSelectedPlaceChanged() {
    if (
      this.selectedPlace &&
      this.selectedPlace.lat &&
      this.selectedPlace.lng
    ) {
      try {
        const res = await this.weatherService.getWeatherForecast(
          this.selectedPlace.lat,
          this.selectedPlace.lng
        );
        this.forecastData = res;
        this.error = null; // Reset any previous errors
      } catch (err: any) {
        this.forecastData = null; // Clear forecast data on error
        this.error = err; // Assign the error to display to the user
      }
    }
  }

  getWeatherClass(weatherCode: number | undefined) {
    switch (weatherCode) {
      case 1:
        return "clear";
      case 2:
        return "cloudy";
      case 3:
        return "rainy";
      default:
        return "default";
    }
  }

  weatherBackgroundClass() {
    return this.getWeatherClass(
      this.forecastData?.current_weather?.weathercode
    );
  }

  formattedTime() {
    const timeString = this.forecastData?.current_weather?.time;
    if (!timeString) return "No Data";

    const date = new Date(timeString);
    return date.toLocaleString();
  }
}
