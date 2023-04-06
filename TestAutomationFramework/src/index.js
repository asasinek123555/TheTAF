import { getUrl, goToUrl, scrollToElement } from "./func/index.js";
import { finalize, generate } from "./util.js";

export const taf = {
  goToUrl,
  getUrl,
  scrollToElement,
};

export async function test(name, callback) {
  //TODO save test name

  //call callback and measure time
  const start = performance.now();
  await callback();
  const end = performance.now();

  generate(name, end - start);
  //clear self

  finalize();
}
