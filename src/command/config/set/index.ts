import inquirer from "inquirer";
import { getConfigValue, setConfigValue } from "../../../lib/config";
import { ConfigKey } from "../../../types/index";

export async function setter(): Promise<void> {
  const allKeys = Object.values(ConfigKey);

  const unsetKeys: ConfigKey[] = [];
  for (const key of allKeys) {
    const value = await getConfigValue(key);
    if (!value) unsetKeys.push(key);
  }

  if (unsetKeys.length === 0) {
    console.log("✅ All config keys are already set.");
    return;
  }

  const { selectedKey } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedKey",
      message: "Select a config key to set:",
      choices: unsetKeys.map((k) => ({
        name: k,
        value: k,
      })),
    },
  ]);

  const { value } = await inquirer.prompt([
    {
      type: "input",
      name: "value",
      message: `Enter value for "${selectedKey}":`,
    },
  ]);

  await setConfigValue(selectedKey, value);
  console.log(`✅ Set "${selectedKey}" to "${value}"`);
}
