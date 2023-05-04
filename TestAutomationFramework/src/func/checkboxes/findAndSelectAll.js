import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const findAndSelectAll = async (elem) => {
  try {
    const elements = await driver.findElements(By.css(elem));
    for (let e of elements) {
      if (!(await e.isSelected())) {
        await e.click();
      }
    }
  } catch (error) {
    return false;
  }

  return true;
};
