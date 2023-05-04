export const getTextFromInnerHTML = async (elem) => {
  try {
    return await elem.getAttribute("innerHTML");
  } catch (error) {
    return false;
  }
};
