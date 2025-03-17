<template>
  <div class="home" :class="{ 'no-forecast-display': !locationName }">
    <transition>
      <WeatherForecast
        v-show="locationName"
        :selectedPlace="selectedPlace"
        :locationName="locationName"
      />
    </transition>
    <SearchCity
      @placeChanged="placeChanged"
      @updateLocationName="updateLocationName"
    />
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>

<style scoped>
.v-enter-active,
.v-leave-active {
  @apply transition-opacity duration-500 ease-in;
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}

.home.no-forecast-display {
  @apply pb-36;
}
</style>
