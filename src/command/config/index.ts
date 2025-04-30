import { Command } from "commander";
import { ConfigKey } from "../../types";
import {
  deleteConfigKey,
  getConfigValue,
  resolveConfigKey,
  setConfigValue,
} from "../../lib/config";
import configMain from "./menu";
import { setter } from "./set";

const config = new Command("config");

config.description("Configure The Command Line Interface");

config
  .command("get")
  .argument("<key>", "config key")
  .action(async (keyInput: string) => {
    const key = resolveConfigKey(keyInput);
    if (!key) {
      console.error(`Unknown config key: "${key}"`);
      process.exit(1);
    }

    const value = await getConfigValue(key as ConfigKey);
    console.log(value ?? "(not set)");
  });

config.command("set").action(setter);

config
  .command("delete")
  .argument("<key>", "config key")
  .action(async (keyInput: string) => {
    const key = resolveConfigKey(keyInput);
    if (!key) {
      console.error(`Unknown config key: "${key}"`);
      process.exit(1);
    }

    await deleteConfigKey(key as ConfigKey);
    console.log(`Deleted config key "${key}"`);
  });

config
  .command("main")
  .description("Main configuration menu")
  .action(configMain);

export default config;
