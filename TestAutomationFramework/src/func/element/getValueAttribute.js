import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const getValueAttribute = async (elem, attribute) => {
    const element = await driver.findElement(By.css(elem));
    return await element.getAttribute(attribute);
  };
  