import { driver } from "../../util.js";
export const getUrl = async () => {
  return await driver.getCurrentUrl();
};
