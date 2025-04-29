import figlet from "figlet";
import { rainbow } from 'gradient-string'

async function welcome() {
  console.clear();
  const msg = figlet.textSync("Zuki", {
    horizontalLayout: "default",
    verticalLayout: "default",
  });

  console.log(rainbow.multiline(msg));
}


export {welcome}