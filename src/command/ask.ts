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
  console.log(formatTitle("CIEL Menu"));
  const answer = await inquirer.prompt<{ action: ChoiceKey }>({
    name: "action",
    type: "list",
    message: "What do you want to do?",
    choices: mainMenuChoices,
  });

  return answer.action;
}

async function handleChoice(choice: ChoiceKey) {
  try {
    switch (choice) {
      case ChoiceKey.INITIALIZE:
        const shouldProceed = await confirm("Initialize a new project?");
        if (shouldProceed) {
          const spinner = createSpinner("Loading...").start();
          await sleep(1000); // Simulate processing
          spinner.success({ text: "Project scaffold coming soon!" });
          success("Project initialized successfully!");
        } else {
          error("Initialization cancelled.");
        }
        break;
      case ChoiceKey.HELP:
        const helpSpinner = createSpinner("Loading...").start();
        await sleep(1000);
        helpSpinner.success({ text: "This is a CIEL demo." });
        break;
      case ChoiceKey.EXIT:
        const exitSpinner = createSpinner("Loading...").start();
        await sleep(1000);
        exitSpinner.success({ text: "Goodbye!" });
        process.exit(0);
        break;
    }
  } catch (err: any) {
    error(`Error: ${err.message || "Unknown error"}`);
    process.exit(1);
  }
}

async function main() {
  try {
    await welcome("CIEL");
    const choice = await ask();
    await handleChoice(choice);
  } catch (err: any) {
    error(`Failed to execute command: ${err.message || "Unknown error"}`);
    process.exit(1);
  }
}

export default main;
