const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'zb6qa7',
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 30000,
    responseTimeout: 10000,
    requestTimeout: 10000,
    chromeWebSecurity: false,
    testIsolation: false,
    env: {
      viewportWidthBreakpoint: 768,
    },
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
  },
})
