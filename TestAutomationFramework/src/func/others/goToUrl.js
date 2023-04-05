import { driver } from "../../util.js";
export async function goToUrl(url) {
  await driver.get(url);
}
