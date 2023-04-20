// imports
import { finalize } from "./util.js";
import { getUrl, goToUrl, scrollToElement } from "./func/index.js";
import { generate } from "./util.js";
export const taf = {
  goToUrl,
  getUrl,
  scrollToElement,
};

export async function test(name, callback) {
  let start, end, state;

  try {
    start = performance.now();
    //call callback and measure time
    await callback();
    end = performance.now();
  } catch (error) {
    state = 0;
    end = performance.now();
  } finally {
    state = 1;
    console.log(end, start);
    generate(name, end - start, state);
    //clear self
    finalize();
  }
}
