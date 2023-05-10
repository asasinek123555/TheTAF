import { driver } from "../../util.js";

export const findAndCheckValue = async (elem) => {
  try {
    return await driver.findElement(elem).getAttribute("value");
  } catch (error) {
    return false;
  }
};
