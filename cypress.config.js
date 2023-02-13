const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bcafinance.co.id",
    specPattern: "cypress/support/e2e",
    supportFile: false,
  },
});
