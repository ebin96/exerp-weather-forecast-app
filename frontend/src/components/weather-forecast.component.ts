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
    weatherDescriptions: Object,
  },
})
export default class WeatherForecast extends Vue {
  @Inject("weatherService")
  public weatherService!: WeatherService;

  selectedPlace!: { lat: number; lng: number };
  locationName!: string;

  weatherDescriptions: Record<number, string> = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Mostly cloudy",
    4: "Overcast",
    5: "Light rain showers",
    6: "Moderate rain showers",
    7: "Heavy rain showers",
    8: "Light snow showers",
    9: "Heavy snow showers",
    10: "Light rain",
    11: "Moderate rain",
    12: "Heavy rain",
    13: "Light snow",
    14: "Moderate snow",
    15: "Heavy snow",
    16: "Thunderstorms",
    17: "Thunderstorms with light rain",
    18: "Thunderstorms with moderate rain",
    19: "Thunderstorms with heavy rain",
    20: "Thunderstorms with light snow",
    21: "Thunderstorms with moderate snow",
    22: "Thunderstorms with heavy snow",
    23: "Freezing rain",
    24: "Fog",
    25: "Haze",
    26: "Dust or sand",
    27: "Light rain with thunder",
    28: "Moderate rain with thunder",
    29: "Heavy rain with thunder",
    30: "Light snow with thunder",
    31: "Moderate snow with thunder",
    32: "Heavy snow with thunder",
  };

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

  getWeatherClass(weatherCode: number | undefined): string {
    if (weatherCode === undefined) return "default";

    const clearCodes = [0, 1];
    const cloudyCodes = [2, 3, 4, 25, 26];
    const rainyCodes = [5, 6, 7, 10, 11, 12, 17, 18, 19, 27, 28, 29];
    const snowCodes = [8, 9, 13, 14, 15, 30, 31, 32];

    if (clearCodes.includes(weatherCode)) return "clear";
    if (cloudyCodes.includes(weatherCode)) return "cloudy";
    if (rainyCodes.includes(weatherCode)) return "rainy";
    if (snowCodes.includes(weatherCode)) return "snow";

    return "default";
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

  getWeatherDescription(weatherCode: number | undefined): string {
    const code: number = weatherCode !== undefined ? weatherCode : -1;
    return this.weatherDescriptions[code] || "No Data";
  }
}
