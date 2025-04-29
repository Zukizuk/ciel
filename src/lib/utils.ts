import figlet from "figlet";
import { rainbow } from 'gradient-string'

async function welcome() {
  console.clear();
  const msg = figlet.textSync("WELCOME ZUKI", {
    horizontalLayout: "default",
    verticalLayout: "default",
  });

  console.log(rainbow.multiline(msg));
}

const sleep = async (ms: number) => new Promise<void>(res => setTimeout(res, ms));

export { welcome, sleep }