import chalk from "chalk";
import { createSpinner } from "nanospinner";

// Format a title with a border
export function formatTitle(title: string): string {
  const border = "=".repeat(title.length);
  return chalk.yellowBright(`${border}\n${title}\n${border}`);
}

// Clear the console with an optional message
export function clearConsole(message?: string): void {
  console.clear();
  if (message) {
    console.log(chalk.bold(message));
  }
}

// Sleep for a specified number of milliseconds
export const sleep = async (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function withSpinner<T>(
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
