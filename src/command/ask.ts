import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { sleep, formatTitle } from "../lib/utils";
import { ChoiceKey, mainMenuChoices } from "../lib/choices";
import { prompt, welcome } from "../components/globals";
import { error, success } from "../lib/utils";
import { title } from "process";
import projectMain from "./projects";

async function ask() {
  const answer = prompt({
    message: "What do you want to do?",
    choices: mainMenuChoices,
  });

  return answer;
}

async function handleChoice(choice: ChoiceKey) {
  try {
    switch (choice) {
      case ChoiceKey.INITIALIZE:
        projectMain();
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
