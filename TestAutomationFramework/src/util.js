import { Builder } from "selenium-webdriver";

export const driver = new Builder().forBrowser("chrome").build();

export async function finalize() {
  await driver.quit();
}
