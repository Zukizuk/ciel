import chalk from "chalk";

// Display a styled success message
export function success(message: string): void {
  console.log(chalk.greenBright(`✔ ${message}`));
}

// Display a styled error message
export function error(message: string): void {
  console.error(chalk.redBright(`✖ ${message}`));
}

// Display a styled info message
export function info(message: string): void {
  console.log(chalk.cyanBright(`ℹ ${message}`));
}
