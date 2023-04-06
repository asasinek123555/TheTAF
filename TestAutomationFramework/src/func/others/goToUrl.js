import { driver } from "../../util.js";
export const goToUrl = async (url) => {
  await driver.get(url);
};
