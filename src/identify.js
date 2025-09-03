const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ['+', '-', '*', '/', '%'];

/**
 * Checks if a character is a letter (a-z or A-Z)
 * @param {string} character - The character to check
 * @returns {boolean} True if character is a letter
 */
const isLetter = (character) => LETTER.test(character);

/**
 * Checks if a character is whitespace
 * @param {string} character - The character to check
 * @returns {boolean} True if character is whitespace
 */
const isWhitespace = (character) => WHITESPACE.test(character);

/**
 * Checks if a character is a number (0-9)
 * @param {string} character - The character to check
 * @returns {boolean} True if character is a number
 */
const isNumber = (character) => NUMBER.test(character);

/**
 * Checks if a character is an opening parenthesis
 * @param {string} character - The character to check
 * @returns {boolean} True if character is '('
 */
const isOpeningParenthesis = (character) => character === '(';

/**
 * Checks if a character is a closing parenthesis
 * @param {string} character - The character to check
 * @returns {boolean} True if character is ')'
 */
const isClosingParenthesis = (character) => character === ')';

/**
 * Checks if a character is any parenthesis (opening or closing)
 * @param {string} character - The character to check
 * @returns {boolean} True if character is '(' or ')'
 */
const isParenthesis = (character) =>
  isOpeningParenthesis(character) || isClosingParenthesis(character);

/**
 * Checks if a character is a quote character
 * @param {string} character - The character to check
 * @returns {boolean} True if character is '"'
 */
const isQuote = (character) => character === '"';

/**
 * Checks if a character is a mathematical operator
 * @param {string} character - The character to check
 * @returns {boolean} True if character is +, -, *, /, or %
 */
const isOperator = (character) => OPERATORS.includes(character);

module.exports = {
  isLetter,
  isWhitespace,
  isNumber,
  isOpeningParenthesis,
  isClosingParenthesis,
  isParenthesis,
  isQuote,
  isOperator,
};
