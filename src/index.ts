#!/usr/bin/env node

import { Command } from "commander";
import main from "./command/ask";
import configMain from "./command/config/menu";
import config from "./command/config";

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

program.addCommand(config);

program.parse(process.argv);
