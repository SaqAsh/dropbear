const tap = require('lodash/tap');

/**
 * Composes multiple functions into a single function
 * @param {...Function} funcs - Functions to compose
 * @returns {Function} A function that applies all functions in sequence
 */
const pipe = (...funcs) => value =>
  funcs.reduce((value, func) => func(value), value);

/**
 * Logs a value and returns it unchanged
 * @param {any} value - The value to log
 * @returns {any} The original value
 */
const log = value => tap(value, console.log);

/**
 * Returns the first element of an array without removing it
 * @param {Array} array - The array to peek at
 * @returns {any} The first element
 */
const peek = array => array[0];

/**
 * Removes and returns the first element of an array
 * @param {Array} array - The array to pop from
 * @returns {any} The removed first element
 */
const pop = array => array.shift();

module.exports = {
  pipe,
  log,
  peek,
  pop,
  tap,
};
