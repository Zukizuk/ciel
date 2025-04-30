import { join } from "path";
import { getConfigValue, hasConfigKey } from "../../../lib/config";
import inquirer from "inquirer";
import { existsSync, mkdirSync } from "fs";
import { CORE_DIRS } from "../../../constants";
import { createDirectories, writeFile } from "../../../lib/utils/file";
import { ConfigKey } from "../../../types";
import { deProjectTemplate } from "../../../templates/de-project";
import { runCommands } from "../../../lib/utils/exec";

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
  } else {
    console.log(`⚠️ Project "${value}" already exists at ${basePath}`);
    return;
  }

  createDirectories(basePath, CORE_DIRS);

  for (const template of deProjectTemplate) {
    const filePath = join(basePath, template.path);
    if (!existsSync(filePath)) {
      await writeFile(filePath, template.content);
    } else {
      console.log(`⚠️ File "${template.path}" already exists at ${filePath}`);
      continue;
    }
  }

  runCommands(basePath, [
    "git init",
    "git add .",
    'git commit -m "Initial commit"',
    "git branch -M main",
  ]);

  console.log(`✅ Project "${value}" initialized at ${basePath}`);
}
