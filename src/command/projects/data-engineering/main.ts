import { join } from "path";
import { getConfigValue, hasConfigKey } from "../../../lib/config";
import inquirer from "inquirer";
import { existsSync, mkdirSync } from "fs";
import { CORE_DIRS } from "../../../constants";
import { createDirectories } from "../../../lib/utils/file";
import { ConfigKey } from "../../../types";

export async function createProject() {
  const { value } = await inquirer.prompt([
    {
      message: "Enter the name of your project",
      name: "value",
      type: "input",
      validate: (input) => {
        if (!input) {
          return "Project name cannot be empty.";
        }
        return true;
      },
    },
  ]);
  const configValue = await getConfigValue(ConfigKey.DeProjectPath);
  const basePath = join(configValue!, value);

  if (!existsSync(basePath)) {
    mkdirSync(basePath);
  }

  createDirectories(basePath, CORE_DIRS);

  console.log(`✅ Project "${value}" initialized at ${basePath}`);
}
