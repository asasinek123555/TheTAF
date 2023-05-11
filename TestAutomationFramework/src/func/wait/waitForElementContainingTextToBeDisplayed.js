import { driver } from "../../util.js";

export const waitForElementContainingTextToBeDisplayed = async (text,maxTime=60000) => {
    return await driver.wait(driver.until.elementIsVisible(
        driver.By.xpath("//*[contains(text(), '"+text+"')]"),
        maxTime
    ));
};
