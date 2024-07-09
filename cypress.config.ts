import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    FRONTEND_ORIGIN: "http://localhost:5173",
    API_URL: "https://rickandmortyapi.com/api",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
