import { Command } from 'commander';
import figlet from 'figlet';
import chalk from 'chalk';
import { welcome } from './lib/utils';
import main from './command/ask';

const program = new Command();
const version = '1.0.0';
program
  .name('Zuki CLI')
  .description('A command line interface for Zuki')
  .version(version)

welcome()

// Commands
program
  .command('init')
  .description('Initialize The Command Line Interface')
  .action(main);
