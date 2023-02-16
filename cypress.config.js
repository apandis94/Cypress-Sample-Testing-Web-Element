const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    testIsolation: false,
    baseUrl: "https://bcafinance.co.id",
    specPattern: "cypress/support/e2e",
    supportFile: false,
  },
});
