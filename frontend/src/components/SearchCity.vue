<template>
  <div class="search-city">
    <h3>Enter a city name or click on the map to view the weather forecast.</h3>
    <GMapAutocomplete
      @place_changed="placeChanged"
      class="gmap-autocomplete"
      :class="{ 'location-error': isLocationValid() }"
    />

    <!-- Error message displayed if location is invalid -->
    <h5
      v-if="isLocationValid()"
      class="text-red-500 text-left mb-3"
      role="alert"
      aria-live="assertive"
    >
      {{ validationError }}
    </h5>

    <GMapMap
      class="gmap-class"
      :center="selectedPlace || { lat: 0, lng: 0 }"
      :zoom="selectedPlace ? 7 : 2"
      map-type-id="roadmap"
      ref="gmap"
      @click="handleMapClick($event)"
    >
    </GMapMap>
  </div>
</template>

<script lang="ts" src="./search-city.component.ts"></script>

<style scoped>
.search-city {
  @apply text-center transition-all duration-1000 ease-in-out;
}

.gmap-class {
  @apply h-128 w-full;
}

.gmap-autocomplete {
  @apply w-64 mx-auto my-4;
}

.location-error {
  @apply border-red-500 focus:ring-red-400 focus:border-red-500 !important;
}

ul {
  @apply list-none p-0;
}

li {
  @apply inline-block mx-2;
}

a {
  @apply text-highlight-blue;
}

.vue-map-container {
  @apply h-128 w-full;
}

.pac-logo:after {
  @apply hidden;
}

.hdpi.pac-logo:after {
  @apply bg-none;
}

.pac-item {
  @apply cursor-default px-1 text-ellipsis overflow-hidden whitespace-nowrap leading-10 text-left border-t border-gray-300 text-sm text-medium-gray;
}
</style>
