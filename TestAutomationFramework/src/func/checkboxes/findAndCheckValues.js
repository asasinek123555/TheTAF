import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const findAndCheckValues = async (elem, value) => {
  try {
    const element = await driver.findElement(By.css(elem));
    const val = await element.getAttribute('value');
    if (val === value){
        await element.click();
    }
  } catch (error) {
    return false;
  }
  return true;
};