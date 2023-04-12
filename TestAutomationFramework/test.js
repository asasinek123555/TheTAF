import { test, taf } from "./src/index.js";

test("My test", async () => {
  await taf.goToUrl("https://www.selenium.dev/documentation/webdriver/actions_api/wheel");
  await taf.getUrl().then((url) => {
    console.log(url);
  });
  await taf.scrollToElement('#scroll-from-an-element-by-a-given-amount')
});
