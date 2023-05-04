export const getTextFromAllElements = async (elems) => {
  try {
    const texts = [];
    for (let e of elems) {
      texts.push(await e.getText());
    }
    return texts;
  } catch (error) {
    return false;
  }
};
