import { promises as fs } from "fs";
import path from "path";
import os from "os";
import { Config, ConfigKey } from "../../types";

const CONFIG_DIR = path.join(os.homedir(), ".ciel");
const CONFIG_FILE = path.join(CONFIG_DIR, "config.json");

// Initial default values if config doesn't exist yet
const DEFAULT_CONFIG: Config = {
  deProjectPath: "",
  mlProjectPath: "",
  lastUsedProject: "",
};

// Ensure config directory exists
async function ensureConfigDir(): Promise<void> {
  try {
    await fs.mkdir(CONFIG_DIR, { recursive: true });
  } catch (err: any) {
    throw new Error(`Failed to create config directory: ${err.message}`);
  }
}

// Check if config file exists
async function configFileExists(): Promise<boolean> {
  try {
    await fs.access(CONFIG_FILE);
    return true;
  } catch {
    return false;
  }
}

// Initialize config with defaults if not present
async function initConfig(): Promise<void> {
  await ensureConfigDir();
  const exists = await configFileExists();
  if (!exists) {
    await writeConfig(DEFAULT_CONFIG);
  }
}

// Read config from disk
async function readConfig(): Promise<Config> {
  try {
    await ensureConfigDir();
    const data = await fs.readFile(CONFIG_FILE, "utf-8");
    return JSON.parse(data) as Config;
  } catch (err: any) {
    if (err.code === "ENOENT") {
      return { ...DEFAULT_CONFIG };
    }
    throw new Error(`Failed to read config: ${err.message}`);
  }
}

// Write config to disk
async function writeConfig(config: Config): Promise<void> {
  try {
    await ensureConfigDir();
    await fs.writeFile(CONFIG_FILE, JSON.stringify(config, null, 2), "utf-8");
  } catch (err: any) {
    throw new Error(`Failed to write config: ${err.message}`);
  }
}

// Get a specific config value
async function getConfigValue<T extends ConfigKey>(
  key: T
): Promise<Config[T] | undefined> {
  const config = await readConfig();
  return config[key];
}

// Set a specific config value
async function setConfigValue<T extends ConfigKey>(
  key: T,
  value: Config[T]
): Promise<void> {
  const config = await readConfig();
  config[key] = value;
  await writeConfig(config);
}

// Check if a specific key exists in config
async function hasConfigKey<T extends ConfigKey>(key: T): Promise<boolean> {
  const config = await readConfig();
  return config[key] !== undefined && config[key] !== "";
}

// Delete a specific config key
async function deleteConfigKey<T extends keyof Config>(key: T): Promise<void> {
  const config = await readConfig();
  delete config[key];
  await writeConfig(config);
}

export {
  initConfig,
  readConfig,
  writeConfig,
  getConfigValue,
  setConfigValue,
  hasConfigKey,
  deleteConfigKey,
  configFileExists,
};
