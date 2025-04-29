import figlet from "figlet";
import gradient from "gradient-string";
import chalk from "chalk";
import inquirer from "inquirer";
import { createSpinner, Spinner } from "nanospinner";

// Display a gradient-colored ASCII art banner
async function welcome(message: string = "WELCOME TO CIEL"): Promise<void> {
  console.clear();
  const msg = figlet.textSync(message, {
    horizontalLayout: "default",
    verticalLayout: "default",
  });
  console.log(gradient.rainbow.multiline(msg));
}

// Sleep for a specified number of milliseconds
const sleep = async (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Display a styled success message
function success(message: string): void {
  console.log(chalk.greenBright(`✔ ${message}`));
}

// Display a styled error message
function error(message: string): void {
  console.error(chalk.redBright(`✖ ${message}`));
}

// Display a styled info message
function info(message: string): void {
  console.log(chalk.cyanBright(`ℹ ${message}`));
}

// Confirm action with the user (yes/no prompt)
async function confirm(
  message: string,
  defaultValue: boolean = true
): Promise<boolean> {
  const { confirmed } = await inquirer.prompt<{ confirmed: boolean }>({
    name: "confirmed",
    type: "confirm",
    message,
    default: defaultValue,
  });
  return confirmed;
}

// Run an async task with a spinner
async function withSpinner<T>(
  message: string,
  task: () => Promise<T>
): Promise<T> {
  const spinner = createSpinner(message).start();
  try {
    const result = await task();
    spinner.success({ text: `${message} - Done!` });
    return result;
  } catch (err) {
    spinner.error({ text: `${message} - Failed!` });
    throw err;
  }
}

// Format a title with a border
function formatTitle(title: string): string {
  const border = "=".repeat(title.length);
  return chalk.yellowBright(`${border}\n${title}\n${border}`);
}

// Clear the console with an optional message
function clearConsole(message?: string): void {
  console.clear();
  if (message) {
    console.log(chalk.bold(message));
  }
}

export {
  welcome,
  sleep,
  success,
  error,
  info,
  confirm,
  withSpinner,
  formatTitle,
  clearConsole,
};
