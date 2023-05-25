import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const selectOptionByValue = async (elem, value) => {
  try {
    const element = await driver.findElement(By.css(elem));
    const elements = await element.findElements(By.css('option'));
    for (let e of elements){
        const val = await e.getAttribute('value');
        const label = await e.getAttribute('label');
        if (val == value || label == value){
            await e.click();
            return true;
        }
    }
} catch (error) {
    return false;
}
};