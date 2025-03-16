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
  margin: 10px auto;
  padding: 20px;
  border-radius: 12px;
  background-color: #f4f7f6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 1s ease-in-out;
}

.default {
  background: linear-gradient(to bottom, #b3cde0, #6497b1);
}

.clear {
  background: url("/src/assets/clear-sky.jpg") no-repeat center center/cover;
}

.cloudy {
  background: url("/src/assets/cloudy.jpg") no-repeat center center/cover;
}

.rainy {
  background: url("/src/assets/rainy.jpg") no-repeat center center/cover;
}

.weather-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}

.weather-info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
}

.weather-detail {
  background: linear-gradient(to right, #f5f5dc, #d9d9b3);

  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.weather-detail h4 {
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
}

.weather-detail p {
  font-size: 14px;
  color: #666;
}

@media (max-width: 860px) {
  .weather-info {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .weather-info {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
