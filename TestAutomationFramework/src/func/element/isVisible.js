import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const isVisible = async (elem) => {
    return await driver.findElement(By.css(elem)).isDisplayed();
  };
  