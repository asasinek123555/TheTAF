// imports
import { finalize } from "./util.js";
import { generate } from "./util.js";

import { getUrl, goToUrl, 
  scrollToElement, getValueAttribute,
  getAllElements, areElementsDisplayed,
  isSelected, isEnabled, isVisible,
  countVisibleElements, findAndSelect,
  findAndSelectAll, findAndClick} from "./func/index.js";

export const taf = {
  goToUrl, getUrl,
  scrollToElement, getValueAttribute,
  getAllElements, areElementsDisplayed,
  isSelected, isEnabled, isVisible,
  countVisibleElements, findAndSelect,
  findAndSelectAll, findAndClick
};

export async function test(name, callback) {
  let start, end, state;

  try {
    start = performance.now();
    //call callback and measure time
    await callback();
    end = performance.now();
    state = 1;
  } catch (error) {
    state = 0;
    end = performance.now();
  } finally {
    generate(name, end - start, state);
    //clear self
    finalize();
  }
}
