import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const findAndClick = async (elem) => {
  try {
    await driver.findElement(By.css(elem)).click();
  } catch (error) {
    return false;
  }

  return true;
};
