import { goToUrl } from "./func/others/goToUrl.js";
import { getUrl } from "./func/others/getUrl.js";
import { finalize } from "./util.js";
export const taf = {
  goToUrl,
  getUrl,
};

export async function test(name, callback) {
  //TODO save test name

  //call callback
  await callback();
  //clear self
  finalize();
}
