import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const findAndSelect = async (elem) => {
    const element = await driver.findElement(By.css(elem));
    if (await element.isSelected() == false){
        await element.click();
    }
  };