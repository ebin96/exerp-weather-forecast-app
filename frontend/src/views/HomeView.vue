<template>
  <div class="home">
    <WeatherForecast
      :selectedPlace="selectedPlace"
      :locationName="locationName"
    />
    <SearchCity
      @placeChanged="placeChanged"
      @updateLocationName="updateLocationName"
    />
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
