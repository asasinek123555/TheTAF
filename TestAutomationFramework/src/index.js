// imports
import { finalize } from "./util.js";
import { getUrl, goToUrl, 
  scrollToElement, getValueAttribute,
  getAllElements, areElementsDisplayed,
  isSelected, isEnabled, isVisible,
  countVisibleElements } from "./func/index.js";

//exports
export const taf = {
  goToUrl, getUrl,
  scrollToElement, getValueAttribute,
  getAllElements, areElementsDisplayed,
  isSelected, isEnabled, isVisible,
  countVisibleElements
};

export async function test(name, callback) {
  //TODO save test name

  //call callback
  await callback();

  //clear self
  finalize();
}
