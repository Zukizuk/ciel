import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { sleep, success, error } from "../../lib/utils";
import { ConfigChoiceKey, configMenuChoices } from "../../lib/choices";
import { getConfigValue, setConfigValue, readConfig } from "../../lib/config";
import { prompt } from "../../components/globals";

async function configureMenu() {
  return prompt({
    message: "Select a configuration option:",
    choices: configMenuChoices,
  });
}

async function handleConfigChoice(choice: ConfigChoiceKey) {
  const spinner = createSpinner("Processing...").start();
  await sleep(500);

  try {
    switch (choice) {
      case ConfigChoiceKey.VIEW_CONFIG:
        const config = await readConfig();
        spinner.success({ text: "Configuration loaded!" });
        console.log(JSON.stringify(config, null, 2));
        break;
      case ConfigChoiceKey.EXIT:
        spinner.success({ text: "Exiting configuration!" });
        break;
    }
  } catch (err: any) {
    spinner.error({ text: `Error: ${err.message || "Unknown error"}` });
    throw err;
  }
}

async function configMain() {
  try {
    const choice = await configureMenu();
    await handleConfigChoice(choice);
  } catch (err: any) {
    error(`Failed to configure: ${err.message || "Unknown error"}`);
    process.exit(1);
  }
}

export default configMain;
