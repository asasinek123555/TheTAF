import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const clear = async (elem) => {
  try {
    await driver.findElement(By.css(elem)).clear();
  } catch (error) {
    return false;
  }

  return true;
};
