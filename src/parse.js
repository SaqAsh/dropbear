const { isOpeningParenthesis, isClosingParenthesis } = require('./identify');
const { specialForms } = require('./special-forms');
const { peek, pop } = require('./utilities');

/**
 * Recursively processes tokens to build nested expression structures
 * @param {Array} tokens - Array of tokens to process
 * @returns {Object|Array} Parsed expression or token
 */
const parenthesize = (tokens) => {
  const token = pop(tokens);

  if (isOpeningParenthesis(token.value)) {
    const expression = [];
    while (!isClosingParenthesis(peek(tokens).value)) {
      expression.push(parenthesize(tokens));
    }

    pop(tokens);
    return expression;
  }

  // we have hit the leaf node
  return token;
};

/**
 * Converts tokens into an Abstract Syntax Tree (AST)
 * @param {Array|Object} tokens - Tokens to parse or single token
 * @returns {Object} AST node representing the parsed structure
 */
const parse = (tokens) => {
  // we need to call the same function over again for each value, until we have only one value, which then we can identify
  if (Array.isArray(tokens)) {
    const [first, ...rest] = tokens;
    return {
      type: 'CallExpression',
      name: first.value,
      arguments: rest.map(parse),
    };
  }

  const token = tokens;

  if (token.type === 'Number') {
    return {
      type: 'NumericLiteral',
      value: token.value,
    };
  }

  if (token.type === 'String') {
    return {
      type: 'StringLiteral',
      value: token.value,
    };
  }

  if (token.type === 'Name') {
    return {
      type: 'Identifier',
      name: token.value,
    };
  }
};

module.exports = { parse: (tokens) => parse(parenthesize(tokens)) };
