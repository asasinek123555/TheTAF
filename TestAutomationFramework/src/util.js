import { Builder } from "selenium-webdriver";
import chalk from "chalk";
import boxen from "boxen";
export const driver = new Builder().forBrowser("chrome").build();

export async function finalize(results) {
  const { name, data, raport, performance } = results;

  if (raport === "console") {
    console.log(
      boxen(
        `Czas trwania testu ${chalk.yellow((performance * 1000).toFixed(2))}s
        \n${data.map(
          (d) => `• ${d.name} ${d.result ? "✅" : "❌"}  \n`
        )}`.replaceAll(",", "") +
          `\n${data.map((d) => (d.result ? "🟩" : "🟥"))}`.replaceAll(",", ""),
        {
          borderStyle: "round",
          margin: 1,
          padding: { top: 1, left: 1, right: 2 },
          borderColor: "green",
          title: chalk.blueBright(name),
          titleAlignment: "center",
        }
      )
    );
  }

  await driver.quit();
}
