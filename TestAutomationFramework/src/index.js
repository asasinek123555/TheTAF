// imports
import { finalize } from "./util.js";

import {
  getUrl,
  goToUrl,
  scrollToElement,
  getValueAttribute,
  getAllElements,
  areElementsDisplayed,
  isSelected,
  isEnabled,
  isVisible,
  countVisibleElements,
  findAndClick,
  findAndSelect,
  findAndSelectAll,
  waitForElementToHide,
  waitForElementToBeDisplayed,
  waitForElementToBeEnable,
  waitForElementContainingTextToBeDisplayed,
  waitAndClickElementContainsText,
} from "./func/index.js";

export const taf = {
  goToUrl,
  getUrl,
  scrollToElement,
  getValueAttribute,
  getAllElements,
  areElementsDisplayed,
  isSelected,
  isEnabled,
  isVisible,
  countVisibleElements,
  findAndSelect,
  findAndSelectAll,
  findAndClick,
  waitForElementToHide,
  waitForElementToBeDisplayed,
  waitForElementToBeEnable,
  waitForElementContainingTextToBeDisplayed,
  waitAndClickElementContainsText,
};

export function test(name, callback, raport = "console") {
  let start, end;
  start = performance.now();
  const data = callback;
  end = performance.now();

  finalize({ name, data, raport, performance: end - start });
}

export const it = (...args) => {
  return args;
};

export const describe = (name, result) => {
  return { name, result };
};
