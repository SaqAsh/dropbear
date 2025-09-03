// @ts-check

const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
} = require('./identify');

/**
 * Converts a string input into an array of tokens
 * @param {string} input - The string to tokenize
 * @returns {{ type: string, value: string | number }[]} An array of token objects with type and value
 */
const tokenize = (input) => {
  const tokens = [];
  let cursor = 0;

  while (cursor < input.length) {
    const character = input[cursor];

    if (isParenthesis(character)) {
      tokens.push({
        type: 'Parenthesis',
        value: character,
      });
      cursor++;
      continue;
    }

    if (isWhitespace(character)) {
      cursor++;
      continue;
    }

    if (isNumber(character)) {
      let number = character;

      while (isNumber(input[++cursor])) {
        number += input[cursor];
      }

      tokens.push({ type: 'Number', value: parseInt(number, 10) });
      continue;
    }

    if (isLetter(character)) {
      let identifier = character;

      while (isLetter(input[++cursor])) {
        identifier += input[cursor];
      }

      tokens.push({ type: 'Name', value: identifier });
      continue;
    }

    if (isQuote(character)) {
      let string = '';

      while (!isQuote(input[++cursor])) {
        string += input[cursor];
      }

      tokens.push({ type: 'String', value: string });

      cursor++;
      continue;
    }

    throw new Error(`Invalid input: ${character}`);
  }

  return tokens;
};

module.exports = { tokenize };
