/**
 * Creates a function that applies a binary operation to a list of values
 * @param {Function} fn - Binary operation function (e.g., add, multiply)
 * @returns {Function} Function that reduces a list using the binary operation
 */
const all =
  (fn) =>
  (...list) =>
    list.reduce(fn);

/**
 * Adds multiple numbers together
 * @param {...number} list - Numbers to add
 * @returns {number} Sum of all numbers
 */
const add = all((a, b) => a + b);

/**
 * Subtracts numbers from left to right
 * @param {...number} list - Numbers to subtract
 * @returns {number} Result of subtraction
 */
const subtract = all((a, b) => a - b);

/**
 * Multiplies multiple numbers together
 * @param {...number} list - Numbers to multiply
 * @returns {number} Product of all numbers
 */
const multiply = all((a, b) => a * b);

/**
 * Divides numbers from left to right
 * @param {...number} list - Numbers to divide
 * @returns {number} Result of division
 */
const divide = all((a, b) => a / b);

/**
 * Applies modulo operation from left to right
 * @param {...number} list - Numbers to apply modulo to
 * @returns {number} Result of modulo operations
 */
const modulo = all((a, b) => a % b);

/**
 * Returns the maximum value from a list of numbers
 * @param {...number} args - Numbers to compare
 * @returns {number} The maximum value
 */
const max = (...args) => Math.max(...args);

/**
 * Returns the minimum value from a list of numbers
 * @param {...number} args - Numbers to compare
 * @returns {number} The minimum value
 */
const min = (...args) => Math.min(...args);

/**
 * Logs values to console
 * @param {...any} args - Values to log
 */
const log = console.log;

const environment = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  log,
  max,
  min,
  pi: Math.PI,
};

module.exports = { environment };
