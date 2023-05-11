import { driver } from "../../util.js";

export const waitForElementToBeEnable = async (selector,maxTime=60000) => {
    return await driver.wait(driver.until.elementIsEnabled(
        driver.By.css(selector),
        maxTime
    ));
};
