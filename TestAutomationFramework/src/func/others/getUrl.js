import { driver } from "../../util.js";
export async function getUrl() {
  return await driver.getCurrentUrl();
}
