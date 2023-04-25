import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const getAllElements = async (elem) => {
  try {
    return await driver.findElements(By.css(elem));
  } catch (error) {
    return false;
  }
};
