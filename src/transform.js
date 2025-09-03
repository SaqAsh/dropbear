const { traverse } = require('./traverse');

/**
 * Transforms an AST by applying visitor modifications
 * @param {Object} node - AST node to transform
 * @returns {Object} Transformed AST node
 */
const transform = (node) => {
  return node;
};

const specialForms = {};

module.exports = { specialForms, transform };
