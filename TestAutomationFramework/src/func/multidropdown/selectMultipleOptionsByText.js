import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const selectMultipleOptionsByText = async (elem, texts) => {
  try {
    const element = await driver.findElement(By.css(elem));
    const elements = await element.findElements(By.css('option'));
    let count = 0
    for (let text of texts){
        for (let e of elements){
            const val = await e.getText();
            if (val == text){
                await e.click();
                count = count + 1;
            }
        }
    }
    if (count == texts.length){
        return true;
    }
} catch (error) {
    return false;
}
};