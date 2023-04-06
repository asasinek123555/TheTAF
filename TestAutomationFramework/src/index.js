import { goToUrl } from "./func/others/goToUrl.js";
import { getUrl } from "./func/others/getUrl.js";
import { finalize, generate } from "./util.js";

export const taf = {
  goToUrl,
  getUrl,
};

export async function test(name, callback) {
  //TODO save test name

  //call callback and measure time
  const start = performance.now();
  await callback();
  const end = performance.now();

  generate(name, end - start);
  //clear self

  finalize();
}
