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

export interface FileTemplate {
  content: string;
  path: string;
}
