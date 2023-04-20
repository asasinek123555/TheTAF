import { driver } from "../../util";
import { By } from "selenium-webdriver";

export const findAndClick = async (elem) =>
  await driver.findElement(By.css(elem)).click();
