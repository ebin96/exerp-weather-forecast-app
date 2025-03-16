<template>
  <div class="about">
    <h2 class="text-center text-2xl text-highlight-blue mb-6">Exerp Weather</h2>
    <p class="text-base text-gray-700 leading-6 mb-6">
      Welcome to the most accurate and user-friendly weather forecasting app!
      Whether you're planning a trip or just curious about the weather, we
      provide real-time data to keep you informed.
    </p>

    <div class="current-weather mt-6">
      <h3 class="text-gray-600">What do we provide?</h3>
      <ul class="list-none pl-0">
        <li class="text-base text-gray-700 mb-3">
          <strong class="text-highlight-blue">Temperature:</strong> The current
          temperature at your location.
        </li>
        <li class="text-base text-gray-700 mb-3">
          <strong class="text-highlight-blue">Wind Speed:</strong> Real-time
          wind speed updates.
        </li>
        <li class="text-base text-gray-700 mb-3">
          <strong class="text-highlight-blue">Wind Direction:</strong> Wind
          direction for better weather insights.
        </li>
        <li class="text-base text-gray-700 mb-3">
          <strong class="text-highlight-blue">Weather Condition:</strong>
          Real-time weather updates (e.g., Clear Sky, Rain, etc.).
        </li>
      </ul>
    </div>

    <div class="additional-info mt-4">
      <h3 class="text-gray-600">Why Choose Us?</h3>
      <p class="text-base text-gray-700 leading-6 mb-6">
        Our app pulls data from reliable sources to ensure the accuracy and
        timeliness of every forecast. Stay updated with the best weather
        information!
      </p>
    </div>

    <div class="footer mt-10 text-center text-sm text-gray-500">
      <p>Created with ❤️ by Ebin</p>
    </div>
  </div>
</template>

<style scoped>
.about {
  @apply px-20 py-16 bg-blue-100 rounded-xl shadow-lg max-w-2xl mx-auto text-gray-800;
}

@media (max-width: 600px) {
  .about {
    @apply px-4 py-5;
  }
}
</style>
