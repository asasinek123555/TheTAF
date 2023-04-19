import { test, taf } from "./src/index.js";

test("My test", async () => {
  await taf.goToUrl("https://www.selenium.dev/selenium/web/inputs.html");
  await taf.getUrl().then((url) => {
    console.log(url);
  });

  // https://www.selenium.dev/documentation/webdriver/actions_api/wheel/
  // await taf.scrollToElement('#scroll-from-an-element-by-a-given-amount')

  // https://www.selenium.dev/selenium/web/inputs.html
  // await taf.getAllElements('input').then(async (elements) => {
  //   for(let e of elements){
  //     console.log(await e.getText())
  //   }
  // });

  // https://www.selenium.dev/selenium/web/inputs.html
  // await taf.getAllElements('input').then(async (elements) => {
  //   console.log(await taf.areElementsDisplayed(elements));
  // });
  // await taf.getAllElements('input').then(async (elements) => {
  //   console.log(await taf.countVisibleElements(elements));
  // });
  

  // https://the-internet.herokuapp.com/checkboxes
  // console.log(await taf.isSelected("input[type='checkbox']:first-of-type"));

  // https://www.selenium.dev/selenium/web/inputs.html
  // console.log(await taf.isEnabled('input[name="button_input"]'))
  // console.log(await taf.isVisible('input[name="email_input"]'))
  
  
});
