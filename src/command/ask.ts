#!/usr/bin/env node

import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { welcome, sleep } from "../lib/utils";

async function ask() {
  const answer = await inquirer.prompt({
    name: "action",
    type: "list",
    message: "What do you want to do?",
    choices: [
      "🔧  Initialize a project",
      "❓  Help",
      "🚪  Exit"
    ],
  });

  return answer.action;
}

async function handleChoice(choice: string) {
  const spinner = createSpinner("Thinking...").start();
  await sleep(1000);

  switch (choice) {
    case "🔧  Initialize a project":
      spinner.success({ text: "Project scaffold coming soon!" });
      break;
    case "❓  Help":
      spinner.success({ text: "This is a Zuki CLI demo." });
      break;
    case "🚪  Exit":
      spinner.success({ text: "Goodbye!" });
      process.exit(0);
  }
}

async function main() {
  await welcome();
  const choice = await ask();
  await handleChoice(choice);
}

main();

export default main;
