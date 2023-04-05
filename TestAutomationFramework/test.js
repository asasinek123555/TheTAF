import { test, taf } from "./src/index.js";

test("My test", async () => {
  await taf.goToUrl("https://www.google.com");
  await taf.getUrl().then((url) => {
    console.log(url);
  });
});
