import { Builder } from "selenium-webdriver";
import chalk from "chalk";
import boxen from "boxen";
export const driver = new Builder().forBrowser("chrome").build();

export async function finalize() {
  await driver.quit();
}

export async function generate(name, performance, state) {
  console.log(
    "\n\n" +
      boxen(
        `After running ${chalk.blue(`"${name}"`)} for ${chalk.yellow(
          `${(performance / 1000).toFixed(2)}s`
        )} it ended with ${
          state ? chalk.green("success") : chalk.red("error")
        }.  `,
        {
          title: "Results",
          titleAlignment: "center",
          padding: 1,
        }
      ) +
      "\n\n"
  );
}
