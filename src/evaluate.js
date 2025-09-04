const { environment } = require('./standard-library');
const last = (collection) => collection[collection.length - 1];

/**
 * Applies a function call by evaluating arguments and calling the function
 * @param {Object} node - AST node representing a function call
 * @returns {any} Result of the function call
 */
const apply = (node) => {
  const fn = environment[node.name];
  const args = node.arguments.map(evaluate);
  if (typeof fn !== 'function') {
    throw new TypeError(`${node.name} is not a function`);
  }
  return fn(...args);
};

/**
 * Retrieves a value from the environment by identifier name
 * @param {Object} node - AST node representing an identifier
 * @returns {any} Value associated with the identifier
 * @throws {ReferenceError} When identifier is not defined
 */
const getIdentifier = (node) => {
  if (environment[node.name]) {
    return environment[node.name];
  }
  throw new ReferenceError(`${node.name} is not defined`);
};

/**
 * Evaluates an AST node to produce a value
 * @param {Object} node - AST node to evaluate
 * @returns {any} Evaluated value
 */
const evaluate = (node) => {
  if (node.type === 'Identifier') {
    return getIdentifier(node);
  }
  if (node.type === 'CallExpression') {
    return apply(node);
  }
  if (node.type === 'VariableDeclaration') {
    return set(node);
  }
  if (node.value) {
    return node.value;
  }
};

const set = (node) => {
  environment[node.identifier.name] = node.assignment.value;
};

module.exports = { evaluate };
