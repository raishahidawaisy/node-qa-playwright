// /pages/HomePage.js
const { expect } = require('@playwright/test');

class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // ✅ Define locators here
    this.headerLogo = page.locator('img[alt="Rcade Logo"]');  // Example placeholder
    this.loginButton = page.locator('text=Login');            // Example text button
  }

  // ✅ Visit the home page
  async goto() {
    await this.page.goto('https://node-qa.rcade.network/');
  }

  // ✅ Verify homepage loaded
  async verifyHomePageLoaded() {
    await expect(this.headerLogo).toBeVisible();
  }

  // ✅ Example action: click Login
  async clickLogin() {
    await this.loginButton.click();
  }
}

module.exports = { HomePage };
