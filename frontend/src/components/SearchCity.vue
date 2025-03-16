<template>
  <div>
    <h3>Type a city name to search</h3>
    <GMapAutocomplete @place_changed="placeChanged" class="gmap-autocomplete" />

    <div>
      You can also click a location on the map to view the weather forecast
    </div>
    <!-- TODO add click event -->
    <GMapMap
      class="gmap-class"
      :center="selectedPlace || { lat: 0, lng: 0 }"
      :zoom="selectedPlace ? 7 : 2"
      map-type-id="roadmap"
      ref="gmap"
      @click="handleMapClick($event)"
    ></GMapMap>
  </div>
</template>

<script lang="ts" src="./search-city.component.ts"></script>

<style>
.gmap-class {
  height: 500px;
  width: 100%;
}
.gmap-autocomplete {
  width: 250px;
  margin: 10px auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.vue-map-container {
  height: 500px;
  width: 100%;
}

.pac-logo:after {
  display: none;
}

.hdpi.pac-logo:after {
  background-image: none;
}

.pac-item {
  cursor: default;
  padding: 0 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 40px;
  text-align: left;
  border-top: 1px solid #e6e6e6;
  font-size: 11px;
  color: #515151;
}
</style>
