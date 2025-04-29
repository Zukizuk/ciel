import chalk from 'chalk';

export const logInfo = (message: string) => {
  console.log(chalk.blue(`[INFO] ${message}`));
};

export const logError = (message: string) => {
  console.log(chalk.red(`[ERROR] ${message}`));
};

export const logSuccess = (message: string) => {
  console.log(chalk.green(`[SUCCESS] ${message}`));
};
