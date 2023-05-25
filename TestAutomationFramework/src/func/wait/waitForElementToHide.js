import { driver } from "../../util.js";

export const waitForElementToHide = async (selector,maxTime=60000) => {
    return await driver.wait(driver.until.elementIsNotVisible(
        driver.By.css(selector),
        maxTime
    ));
};
