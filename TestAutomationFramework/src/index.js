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
  clear,
  inputText,
  findAndCheckValues,
  findAndCheckMultiple,
  findAndCheckValue,
  findAndCheckValueRadio,
  getTextFromAllElements,
  getTextFromInnerHTML,
  selectOptionByText,
  selectOptionByValue,
  selectMultipleOptionsByText,
  selectMultipleOptionsByValue,
  selectAllOptions,
  selectOptionByTextMulti,
  selectOptionByValueMulti,
  findAndCheckMultipleRadio,
  findAndCheckSelectRadio,
  findAndSelectAllRadio,
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
  clear,
  inputText,
  findAndCheckValues,
  findAndCheckMultiple,
  findAndCheckValue,
  findAndCheckValueRadio,
  getTextFromAllElements,
  getTextFromInnerHTML,
  selectOptionByText,
  selectOptionByValue,
  selectMultipleOptionsByText,
  selectMultipleOptionsByValue,
  selectAllOptions,
  selectOptionByTextMulti,
  selectOptionByValueMulti,
  findAndCheckMultipleRadio,
  findAndCheckSelectRadio,
  findAndSelectAllRadio,
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

export const wait = (time) => {
  return new Promise((resolve) => setTimeout(() => resolve(true), time));
};
