import { driver } from "../../util.js";

export const waitForElementToBeDisplayed = async (selector,maxTime=60000) => {
    return await driver.wait(driver.until.elementIsVisible(
        driver.By.css(selector),
        maxTime
    ));
};
