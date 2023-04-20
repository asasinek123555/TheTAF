import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const findAndClick = async (elem) => {
  await driver.findElement(By.css(elem)).click();
};
