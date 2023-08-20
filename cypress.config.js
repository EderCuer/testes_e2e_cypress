const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 10000,
    responseTimeout: 10000,
    requestTimeout: 10000,
    chromeWebSecurity: false,
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
