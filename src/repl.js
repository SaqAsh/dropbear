const { prompt } = require('inquirer');
const chalk = require('chalk');

const { parseAndEvaluate } = require('./parse-and-evaluate');

/**
 * Prompts user for input using inquirer
 * @returns {Promise<Object>} Promise resolving to user's input
 */
const askQuestions = () => {
  const questions = [
    { name: 'COMMAND', type: 'input', message: chalk.blue('>') },
  ];

  return prompt(questions);
};
/**
 * Main REPL loop that reads, evaluates, and prints results
 * @returns {Promise<void>} Promise that resolves when REPL exits
 */
const repl = async () => {
  try {
    const answers = await askQuestions();

    const { COMMAND } = answers;

    if (COMMAND.trim()) {
      console.log(chalk.yellow(parseAndEvaluate(COMMAND)));
    }
  } catch (error) {
    console.error(error);
  }

  repl();
};

if (require.main === module) {
  console.log(
    chalk.red(
      `Welcome to the ${chalk.bgYellow('Dropbear')} Programming Language`,
    ),
  );
  repl();
}

module.exports = repl;
