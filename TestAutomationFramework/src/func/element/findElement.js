import { driver } from "../../util.js";
import { By } from "selenium-webdriver";
export const findElement = async (elem) => {
    return await driver.findElement(By.css(elem))
  };