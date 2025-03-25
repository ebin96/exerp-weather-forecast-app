<template>
  <div class="app-content" :class="{ dark: darkMode }">
    <nav class="flex justify-between items-center">
      <div class="flex items-center">
        <span class="text-xl font-bold">Exerp Weather</span>
        <i class="fa fa-cloud-sun text-xl ml-2"></i>
      </div>

      <div class="flex items-center space-x-4">
        <router-link
          to="/"
          class="text-xl"
          title="Home"
          aria-label="Go to Home"
          data-test-id="home-button"
        >
          <i class="fa fa-home"></i>
        </router-link>
        <router-link
          to="/about"
          class="text-xl"
          title="About"
          aria-label="Learn more about Exerp Weather"
          data-test-id="about-button"
        >
          <i class="fa fa-info-circle"></i>
        </router-link>
        <button
          @click="toggleDarkMode"
          class="text-xl"
          title="Toggle Dark Mode"
          aria-label="Toggle Dark Mode"
          aria-pressed="false"
          data-test-id="dark-mode-button"
        >
          <i
            :class="darkMode ? 'fa fa-sun' : 'fa fa-moon'"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      // Save dark mode state in localStorage
      localStorage.setItem("darkMode", this.darkMode ? "enabled" : "disabled");

      const darkModeButton = document.querySelector(
        '[data-test-id="dark-mode-button"]'
      );
      darkModeButton?.setAttribute(
        "aria-pressed",
        this.isDarkMode ? "true" : "false"
      );
    },
  },
  mounted() {
    // Check localStorage for dark mode state when the component is mounted
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "enabled") {
      this.darkMode = true;
    } else if (savedDarkMode === "disabled") {
      this.darkMode = false;
    } else {
      // If no saved preference, check system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        this.darkMode = true;
      } else {
        this.darkMode = false;
      }
    }
  },
};
</script>
