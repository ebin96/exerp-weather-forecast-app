<template>
  <div class="weather-container" :class="weatherBackgroundClass()">
    <h3 class="weather-title">Weather Forecast</h3>

    <div class="weather-info">
      <div class="weather-detail">
        <h4>Current Temperature</h4>
        <p>
          {{
            forecastData?.current_weather?.temperature !== undefined
              ? forecastData?.current_weather?.temperature + "°C"
              : "No Data"
          }}
        </p>
      </div>

      <div class="weather-detail">
        <h4>Wind Speed</h4>
        <p>
          {{
            forecastData?.current_weather?.windspeed !== undefined
              ? forecastData?.current_weather?.windspeed + " km/h"
              : "No Data"
          }}
        </p>
      </div>

      <div class="weather-detail">
        <h4>Wind Direction</h4>
        <p>
          {{
            forecastData?.current_weather?.winddirection !== undefined
              ? forecastData?.current_weather?.winddirection + "°"
              : "No Data"
          }}
        </p>
      </div>

      <div class="weather-detail">
        <h4>Elevation</h4>
        <p>
          {{
            forecastData?.elevation !== undefined
              ? forecastData?.elevation + " meters"
              : "No Data"
          }}
        </p>
      </div>

      <div class="weather-detail">
        <h4>Current Weather</h4>
        <p>
          <span v-if="forecastData?.current_weather?.weathercode === 1"
            >Clear sky</span
          >
          <span v-else-if="forecastData?.current_weather?.weathercode === 2"
            >Partly cloudy</span
          >
          <span v-else>No Data</span>
        </p>
      </div>

      <div class="weather-detail">
        <h4>Time of Report</h4>
        <p>{{ formattedTime() }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style scoped>
.weather-container {
  @apply mx-auto my-4 p-6 rounded-xl bg-pale-gray shadow-md transition-all duration-1000 ease-in-out;
}

.default {
  @apply bg-gradient-to-b from-blue-200 to-blue-500;
}

.clear {
  @apply bg-cover bg-center;
  background-image: url("/src/assets/clear-sky.jpg");
}

.cloudy {
  @apply bg-cover bg-center;
  background-image: url("/src/assets/cloudy.jpg");
}

.rainy {
  @apply bg-cover bg-center;
  background-image: url("/src/assets/rainy.jpg");
}

.weather-title {
  @apply text-2xl text-center mb-5 font-bold;
}

.weather-info {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5;
}

.weather-detail {
  @apply bg-gradient-to-r from-beige-100 to-beige-200 p-4 rounded-xl shadow-sm;
}

.weather-detail h4 {
  @apply mb-2 text-lg text-gray-700;
}

.weather-detail p {
  @apply text-sm text-gray-500;
}

@media (max-width: 860px) {
  .weather-info {
    @apply grid-cols-3;
  }
}

@media (max-width: 600px) {
  .weather-info {
    @apply grid-cols-2;
  }
}
</style>
