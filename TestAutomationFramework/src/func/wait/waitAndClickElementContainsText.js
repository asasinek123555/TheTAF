import { driver } from "../../util.js";

export const waitAndClickElementContainsText = async (url,maxTime=60000) => {
    let element = driver.By.xpath("//*[contains(text(), '"+text+"')]")
    if(!await driver.wait(driver.until.elementIsVisible(
        element,
        maxTime
    ))) return false;
    await element.click()
    return true
};
