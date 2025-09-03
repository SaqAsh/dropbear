const generate = require('@babel/generator').default;
const { traverse } = require('./traverse');

/**
 * Babel visitor that transforms CallExpression nodes for JavaScript generation
 */
const babelVisitor = {
  CallExpression: {
    enter({ node }) {
      node.callee = { type: 'Identifier', name: node.name };
    },
  },
};

/**
 * Converts a Dropbear AST to JavaScript code
 * @param {Object} ast - Abstract Syntax Tree to convert
 * @returns {string} Generated JavaScript code
 */
const toJavaScript = (ast) => {
  traverse(ast, babelVisitor);
  return generate(ast).code;
};

module.exports = {
  toJavaScript,
};
