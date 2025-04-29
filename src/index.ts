#!/usr/bin/env node

import { Command } from "commander";
import main from "./command/ask";

const program = new Command();
const version = "1.0.0";
program
  .name("Zuki CLI")
  .description("A command line interface for Zuki")
  .version(version);

// Commands
program
  .command("init")
  .description("Initialize The Command Line Interface")
  .action(main);

program.parse(process.argv);
