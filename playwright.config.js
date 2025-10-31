// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    testDir: './tests',
    fullyParallel: true,
    retries: 1,
    use: {
      headless: true,
      baseURL: 'https://node-qa.rcade.network/',
      screenshot: 'only-on-failure',
      trace: 'retain-on-failure',
    },
    reporter: [['list']],
  };
  
  module.exports = config;
  