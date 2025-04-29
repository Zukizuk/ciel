import { Command } from 'commander';

// Initialize a new program
const program = new Command();

// Define the version
program.version('0.1.0');

// Command to greet a user
program
  .command('greet <name>')
  .description('Greet the user by their name')
  .action((name) => {
    console.log(`Hello, ${name}!`);
  });

// Command to calculate the sum of two numbers
program
  .command('sum <num1> <num2>')
  .description('Add two numbers')
  .action((num1, num2) => {
    const sum = parseFloat(num1) + parseFloat(num2);
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
  });

// Parse arguments and run the appropriate command
program.parse(process.argv);
