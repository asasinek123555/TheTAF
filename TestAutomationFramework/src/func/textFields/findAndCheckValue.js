import { driver } from "../../util";

export const getTextFromInnerHTML = async (elem) => {
  try {
    return await driver.findElement(elem).getAttribute("value");
  } catch (error) {
    return false;
  }
};
