import { driver } from "../../util.js";
export const scrollToElement = async (elem) => {
    await driver.actions()
        .scroll(0, 0, 0, 0, elem)
        .perform()
  };