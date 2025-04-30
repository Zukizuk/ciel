// Enum for main menu choice keys
export enum ChoiceKey {
  INITIALIZE = "initialize",
  HELP = "help",
  EXIT = "exit",
}

// Enum for project types
export enum ProjectTypeEnum {
  DE = "data-engineering",
  ML = "machine-learning",
}

// Enum for configuration choices
export enum ConfigChoiceKey {
  VIEW_CONFIG = "view-config",
  EXIT = "exit",
}

// Interface for choice objects
interface Choice<T> {
  name: string;
  value: T;
}

// Main menu choices
export const mainMenuChoices: Choice<ChoiceKey>[] = [
  { name: "🔧  Initialize a project", value: ChoiceKey.INITIALIZE },
  { name: "❓  Help", value: ChoiceKey.HELP },
  { name: "🚪  Exit", value: ChoiceKey.EXIT },
];

// Project menu choices
export const projectMenuChoices: Choice<ProjectTypeEnum>[] = [
  { name: "📊  Data Engineering", value: ProjectTypeEnum.DE },
  { name: "🤖  Machine Learning", value: ProjectTypeEnum.ML },
];

// Configuration menu choices
export const configMenuChoices: Choice<ConfigChoiceKey>[] = [
  { name: "👀  View configuration", value: ConfigChoiceKey.VIEW_CONFIG },
  { name: "🚪  Exit", value: ConfigChoiceKey.EXIT },
];
