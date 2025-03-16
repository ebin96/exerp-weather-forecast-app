<template>
  <div class="app-content" :class="{ dark: darkMode }">
    <nav class="flex justify-between items-center">
      <div class="flex-1 text-center">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <button @click="toggleDarkMode" class="text-xl">
        <i :class="darkMode ? 'fa fa-sun' : 'fa fa-moon'"></i>
      </button>
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
