import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const findAndCheckValues = async (elem, values) => {
  try {
    const elements = await driver.findElements(By.css(elem));
    for (let element of elements){
        const val = await element.getAttribute('value');
        for (let e of values){
            if (val === e){
                await element.click();
            }  
        }
    }
  } catch (error) {
    return false;
  }
  return true;
};