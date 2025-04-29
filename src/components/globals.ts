import figlet from "figlet";
import { rainbow } from "gradient-string/dist";
import inquirer from "inquirer";
import { formatTitle } from "../lib/utils";
import { Choice } from "../types";

export async function welcome(
  message: string = "WELCOME TO CIEL"
): Promise<void> {
  console.clear();
  const msg = figlet.textSync(message, {
    horizontalLayout: "default",
    verticalLayout: "default",
  });
  console.log(rainbow.multiline(msg));
}

// Confirm action with the user (yes/no prompt)
export async function confirm(
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

export async function prompt<T>({
  title,
  message,
  choices,
}: {
  message: string;
  choices: Choice<T>[];
  title?: string;
}): Promise<T> {
  if (title) {
    console.log(formatTitle(title));
  }
  const answer = await inquirer.prompt<{ action: T }>({
    name: "action",
    type: "list",
    message,
    choices,
  });
  return answer.action;
}
