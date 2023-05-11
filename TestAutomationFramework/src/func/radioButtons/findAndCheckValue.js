import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const findAndCheckValue = async (elem) => {
    let ret = await driver.findElement(By.css(elem)).isSelected();
    return ret;
  };
  