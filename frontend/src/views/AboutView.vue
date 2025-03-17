<template>
  <div class="about" role="contentinfo" aria-labelledby="about-heading">
    <h2
      id="about-heading"
      class="text-center text-2xl text-highlight-blue mb-6"
    >
      Exerp Weather
    </h2>
    <p class="text-base text-gray-700 leading-6 mb-6">
      Welcome to the most accurate and user-friendly weather forecasting app!
      Whether you're planning a trip or just curious about the weather, we
      provide real-time data to keep you informed.
    </p>

    <section
      class="content-details mt-6"
      aria-labelledby="content-details-heading"
    >
      <h3 id="content-details-heading" class="text-gray-600">
        What do we provide?
      </h3>
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
    </section>

    <section
      class="additional-info mt-4"
      aria-labelledby="why-choose-us-heading"
    >
      <h3 id="why-choose-us-heading" class="text-gray-600">Why Choose Us?</h3>
      <p class="text-base text-gray-700 leading-6 mb-6">
        Our app pulls data from reliable sources to ensure the accuracy and
        timeliness of every forecast. Stay updated with the best weather
        information!
      </p>
    </section>

    <footer
      class="footer mt-10 text-center text-sm text-gray-500"
      role="contentinfo"
    >
      <p>Created with ❤️ by Ebin</p>
    </footer>
  </div>
</template>

<style scoped>
.about {
  @apply px-20 py-16 bg-blue-100 rounded-xl shadow-lg max-w-2xl mx-auto text-gray-800;

  @apply max-w-600:px-4 py-6;
  @apply min-h-700:py-28;
  @apply min-h-800:py-32;
}
</style>
