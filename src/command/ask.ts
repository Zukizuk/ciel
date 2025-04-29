import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import {
  welcome,
  sleep,
  success,
  error,
  confirm,
  formatTitle,
} from "../lib/utils";
import { ChoiceKey, mainMenuChoices } from "../lib/choices";

async function ask() {
  console.log(formatTitle("Zuki CLI Menu"));
  const answer = await inquirer.prompt<{ action: ChoiceKey }>({
    name: "action",
    type: "list",
    message: "What do you want to do?",
    choices: mainMenuChoices,
  });

  return answer.action;
}

async function handleChoice(choice: ChoiceKey) {
  const spinner = createSpinner("Loading...").start();

  try {
    switch (choice) {
      case ChoiceKey.INITIALIZE:
        // const shouldProceed = await confirm("Initialize a new project?");
        // if (shouldProceed) {
        //   await sleep(1000); // Re-add sleep for consistent UX
        //   spinner.success({ text: "Project scaffold coming soon!" });
        //   success("Project initialized successfully!");
        // } else {
        //   spinner.stop();
        //   error("Initialization cancelled.");
        // }
        console.log("Project scaffold coming soon!");
        spinner.success("Project initialized successfully!");
        break;
      case ChoiceKey.HELP:
        await sleep(1000);
        spinner.success({ text: "This is a Zuki CLI demo." });
        break;
      case ChoiceKey.EXIT:
        await sleep(1000);
        spinner.success({ text: "Goodbye!" });
        process.exit(0);
        break;
    }
  } catch (err: any) {
    spinner.error({ text: `Error: ${err.message || "Unknown error"}` });
    throw err; // Re-throw to allow caller to handle or exit
  }
}

async function main() {
  try {
    await welcome("ZUKI CLI");
    const choice = await ask();
    await handleChoice(choice);
  } catch (err: any) {
    error(`Failed to execute command: ${err.message || "Unknown error"}`);
    process.exit(1);
  }
}

export default main;
