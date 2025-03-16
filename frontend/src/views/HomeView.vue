<template>
  <div class="home">
    <WeatherForecast :selectedPlace="selectedPlace" />
    <SearchCity @placeChanged="placeChanged" />
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
