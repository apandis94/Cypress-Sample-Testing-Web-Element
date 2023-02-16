const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      //implementasi node event disini
      require("cypress-mochawesome-reporter/plugin")(on);
    },

    chromeWebSecurity: false,
    testIsolation: false,
    baseUrl: "https://kasirdemo.belajarqa.com",
    specPattern: "cypress/e2e",
    supportFile: false,
    pageLoadTimeout: 75000,
  },
});
