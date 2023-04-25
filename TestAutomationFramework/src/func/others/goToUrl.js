import { driver } from "../../util.js";
export const goToUrl = async (url) => {
  try {
    await driver.get(url);
  } catch (error) {
    return false;
  }

  return true;
};
