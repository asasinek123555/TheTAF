export const countVisibleElements = async (elems) => {
  let count = 0;
  for (let e of elems) {
    if (await e.isDisplayed()) {
      count++;
    }
  }
  return count;
};
