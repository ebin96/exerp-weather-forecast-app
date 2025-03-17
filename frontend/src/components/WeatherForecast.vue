<template>
  <section
    class="weather-container"
    :class="weatherBackgroundClass()"
    aria-live="polite"
  >
    <header class="weather-title">
      <span v-if="isLoading" class="loading-spinner"></span>
      <h3 v-else data-test-id="location-name-display">
        {{ locationName || "No Location Selected" }}
      </h3>
    </header>

    <div class="weather-info">
      <div class="weather-detail">
        <h4>Current Temperature</h4>
        <p>
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else>
            {{
              forecastData?.current_weather?.temperature !== undefined
                ? forecastData?.current_weather?.temperature + "°C"
                : "No Data"
            }}
          </span>
        </p>
      </div>

      <div class="weather-detail">
        <h4>Wind Speed</h4>
        <p>
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else>
            {{
              forecastData?.current_weather?.windspeed !== undefined
                ? forecastData?.current_weather?.windspeed + " km/h"
                : "No Data"
            }}
          </span>
        </p>
      </div>

      <div class="weather-detail">
        <h4>Wind Direction</h4>
        <p>
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else>
            {{
              forecastData?.current_weather?.winddirection !== undefined
                ? forecastData?.current_weather?.winddirection + "°"
                : "No Data"
            }}
          </span>
        </p>
      </div>

      <div class="weather-detail">
        <h4>Elevation</h4>
        <p>
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else>
            {{
              forecastData?.elevation !== undefined
                ? forecastData?.elevation + " meters"
                : "No Data"
            }}
          </span>
        </p>
      </div>

      <div class="weather-detail">
        <h4>Current Weather</h4>
        <p>
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else>
            <span>{{
              getWeatherDescription(forecastData?.current_weather?.weathercode)
            }}</span>
          </span>
        </p>
      </div>

      <div class="weather-detail">
        <h4>Time of Report</h4>
        <p>
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else>{{ formattedTime() }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style scoped>
.weather-container {
  @apply mx-auto my-4 p-6 rounded-xl bg-pale-gray shadow-md transition-all duration-1000 ease-in-out;
}

.weather-title {
  @apply text-2xl text-center mb-5 font-bold text-medium-gray;
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

.snow {
  @apply bg-cover bg-center;
  background-image: url("/src/assets/snow.jpg");
}

.loading-spinner {
  @apply inline-block border-2 border-gray-300 rounded-full animate-spin;
  border-top-color: theme("colors.highlight-blue");
  width: 1em;
  height: 1em;
  line-height: 1;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
