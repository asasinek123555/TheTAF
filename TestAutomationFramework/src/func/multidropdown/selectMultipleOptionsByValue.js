import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const selectMultipleOptionsByValue = async (elem, values) => {
  try {
    const element = await driver.findElement(By.css(elem));
    const elements = await element.findElements(By.css('option'));
    let count = 0
    for (let value of values){
        for (let e of elements){
            const val = await e.getAttribute('value');
            const label = await e.getAttribute('label');
            if (val == value || label == value){
                await e.click();
                count = count + 1;
            }
        }
    }
    if (count == values.length){
        return true;
    }
} catch (error) {
    return false;
}
};