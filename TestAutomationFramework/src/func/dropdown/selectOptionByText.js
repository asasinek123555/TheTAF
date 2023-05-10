import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const selectOptionByText = async (elem, text) => {
  try {
    const element = await driver.findElement(By.css(elem));
    await element.click();
    const elements = await element.findElements(By.css('option'));
    for (let e of elements){
        const val = await e.getText();
        if (val == text){
            await e.click();
            return true;
        }
    }
} catch (error) {
    return false;
}
};