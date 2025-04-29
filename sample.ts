#!/usr/bin/env node

import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { rainbow } from 'gradient-string'

const sleep = (ms = 2000) => new Promise(res => setTimeout(res, ms));



async function askWhatToDo() {
  const answer = await inquirer.prompt({
    name: "action",
    type: "list",
    message: "What do you want to do?",
    choices: [
      "🔧  Create project",
      "❓  Help",
      "🚪  Exit"
    ],
  });

  return answer.action;
}

async function handleChoice(choice: string) {
  const spinner = createSpinner("Thinking...").start();
  await sleep();

  switch (choice) {
    case "🔧  Create project":
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
  const choice = await askWhatToDo();
  await handleChoice(choice);
}

main();
