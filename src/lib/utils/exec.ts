import { exec } from "child_process";
import { promisify } from "util";
import { createSpinner } from "nanospinner";
import { error } from "./messages";

const execAsync = promisify(exec);

export async function runCommands(
  basePath: string,
  commands: string[]
): Promise<void> {
  for (const command of commands) {
    const spinner = createSpinner(`Running "${command}"...`).start();
    try {
      await execAsync(command, { cwd: basePath });
      spinner.success({ text: `Ran "${command}" successfully` });
    } catch (err: any) {
      spinner.error({ text: `Failed to run "${command}": ${err.message}` });
      error(`Skipping "${command}" due to error: ${err.message}`);
      // Continue with next command instead of failing
    }
  }
}
