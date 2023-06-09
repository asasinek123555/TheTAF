import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const scrollToElement = async (elem) => {
  try {
    const elemToScroll = await driver.findElement(By.css(elem));
    await driver.actions().scroll(0, 0, 0, 0, elemToScroll).perform();
  } catch (error) {
    return false;
  }
  return true;
};
