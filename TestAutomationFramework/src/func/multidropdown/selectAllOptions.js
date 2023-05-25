import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const selectAllOptions = async (elem) => {
  try {
    const element = await driver.findElement(By.css(elem));
    const elements = await element.findElements(By.css('option'));
    for (let e of elements){
        await e.click();
    }
    return true;
} catch (error) {
    return false;
}
};