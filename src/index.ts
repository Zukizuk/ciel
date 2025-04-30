#!/usr/bin/env node

import { Command } from "commander";
import main from "./command/ask";
import configMain from "./command/configure";

const program = new Command();
const version = "0.1.0";
program
  .name("ciel")
  .description("A command line interface to simplify your work and life")
  .version(version);

// Commands
program
  .command("init")
  .description("Initialize The Command Line Interface")
  .action(main);

program
  .command("config")
  .description("Configure The Command Line Interface")
  .action(configMain);

program.parse(process.argv);
