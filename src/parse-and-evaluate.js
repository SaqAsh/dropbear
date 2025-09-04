const { tokenize } = require('./tokenize');
const { parse } = require('./parse');
const { evaluate } = require('./evaluate');
const { log, pipe } = require('./utilities');
const { parseProgram } = require('./parse-program');
const { transform } = require('./transform');

/**
 * Complete pipeline: tokenize → parse → evaluate
 * @param {string} input - Source code string
 * @returns {any} Evaluated result
 */
const parseAndEvaluate = pipe(tokenize, parse, transform, evaluate);

/**
 * Pipeline: tokenize → parse (without evaluation)
 * @param {string} input - Source code string
 * @returns {Object} Parsed AST
 */
const tokenizeAndParse = pipe(tokenize, parse);

/**
 * Pipeline: tokenize → parseProgram → evaluate
 * @param {string} input - Source code string
 * @returns {any} Evaluated result
 */
const parseAndEvaluateProgram = pipe(tokenize, parseProgram, evaluate);

module.exports = {
  parseAndEvaluate,
  tokenizeAndParse,
  parseAndEvaluateProgram,
};
