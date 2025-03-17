import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Set the baseUrl dynamically based on the environment
      const baseUrl = process.env.CYPRESS_baseUrl || "http://localhost:8080";

      // Set the config's baseUrl
      config.baseUrl = baseUrl;

      // Return the updated config
      return config;
    },
  },
});
