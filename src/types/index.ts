export interface Choice<T> {
  name: string;
  value: T;
}

export enum ConfigKey {
  DeProjectPath = "deProjectPath",
  MlProjectPath = "mlProjectPath",
  LastUsedProject = "lastUsedProject",
}

export interface Config {
  [ConfigKey.DeProjectPath]: string;
  [ConfigKey.MlProjectPath]: string;
  [ConfigKey.LastUsedProject]: string;
}

export interface FileOrDir {
  type: "file" | "dir";
  name: string;
  content?: string; // Only for files
  children?: FileOrDir[]; // Only for directories
}
