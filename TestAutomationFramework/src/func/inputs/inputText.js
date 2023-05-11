import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const inputText = async (elem, text) => {
  try {
    await driver.findElement(By.css(elem)).sendKeys(text);
  } catch (error) {
    return false;
  }

  return true;
};
