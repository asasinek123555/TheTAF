
// imports
import { finalize } from "./util.js";
import { getUrl, goToUrl, 
  scrollToElement, getValueAttribute,
  getAllElements, areElementsDisplayed,
  isSelected, isEnabled, isVisible,
  countVisibleElements } from "./func/index.js";

export const taf = {
  goToUrl, getUrl,
  scrollToElement, getValueAttribute,
  getAllElements, areElementsDisplayed,
  isSelected, isEnabled, isVisible,
  countVisibleElements
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
