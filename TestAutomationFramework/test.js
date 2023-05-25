import { test, it, describe, taf, wait } from "./src/index.js";

test(
  "Koks test",
  it(
    describe(
      "Idz do strony z teskt inputem",
      await taf.goToUrl(
        "https://www.selenium.dev/selenium/web/click_tests/html5_submit_buttons.html"
      )
    ),
    describe("Wpisz tekst", await taf.inputText("#name", "siema elo")),
    describe(
      "Kliknij przycisk do wyslania",
      await taf.findAndClick("#internal_explicit_submit")
    ),
    describe("Czekaj", await wait(1000)),
    describe(
      "Idz do strony z selectem",
      await taf.goToUrl("https://www.selenium.dev/selenium/web/selectPage.html")
    ),
    describe(
      "Blad w dropdown",
      await taf.selectOptionByText("#selectWithoutMultiple", "three")
    ),
    describe(
      "Zaznacz opcje w dropdown",
      await taf.selectOptionByText("#selectWithoutMultiple", "two")
    ),
    describe(
      "Blad w multidropdown (value)",
      await taf.selectMultipleOptionsByValue(
        "#selectWithMultipleEqualsMultiple",
        ["niepoprawny", "test"]
      )
    ),
    describe(
      "Blad w multidropdown (teskt)",
      await taf.selectMultipleOptionsByText(
        "#selectWithMultipleEqualsMultiple",
        ["test", "niepoprawny"]
      )
    ),
    describe(
      "Zaznacz kilka opcji w multidropdown (value)",
      await taf.selectMultipleOptionsByValue(
        "#selectWithMultipleEqualsMultiple",
        ["roquefort", "parmigiano"]
      )
    ),
    describe(
      "Zaznacz kilka opcji w multidropdown (teskt)",
      await taf.selectMultipleOptionsByValue(
        "#selectWithMultipleEqualsMultiple",
        ["Roquefort", "Parmigiano", "Cheddar"]
      )
    ),
    describe(
      "Zaznacz wszystkie opcje w multidropdown",
      await taf.selectAllOptions("#selectWithMultipleEqualsMultiple")
    ),
    describe("Czekaj", await wait(1000)),
    describe(
      "Idz do strony z checkboxami",
      await taf.goToUrl("https://the-internet.herokuapp.com/checkboxes")
    ),
    describe(
      "Zaznacz checkbox",
      await taf.findAndSelect("input[type='checkbox']:first-of-type")
    ),
    describe("Czekaj", await wait(1000)),
    describe(
      "Idz do strony z formularzami",
      await taf.goToUrl("https://www.selenium.dev/selenium/web/formPage.html")
    ),
    describe(
      "Blad w radiobutton",
      await taf.findAndCheckSelectRadio("#radiotest")
    ),
    describe(
      "Zaznacz dostepne radio buttony",
      await taf.findAndSelectAllRadio("input[type='radio']")
    ),
    describe("Czekaj", await wait(1000))
  )
);
