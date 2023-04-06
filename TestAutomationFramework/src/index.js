// imports
import { finalize } from "./util.js";
import { getUrl, goToUrl } from "./func/index.js";

//exports
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
