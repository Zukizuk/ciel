// Enum for choice keys to ensure type safety and consistency
export enum ChoiceKey {
  INITIALIZE = "initialize",
  HELP = "help",
  EXIT = "exit",
}

// Interface for choice objects to ensure consistent structure
interface Choice {
  name: string; // Display text (user-facing, can include emojis)
  value: ChoiceKey; // Internal key for logic
}

// Main menu choices for the CLI
export const mainMenuChoices: Choice[] = [
  { name: "🔧  Initialize a project", value: ChoiceKey.INITIALIZE },
  { name: "❓  Help", value: ChoiceKey.HELP },
  { name: "🚪  Exit", value: ChoiceKey.EXIT },
];
