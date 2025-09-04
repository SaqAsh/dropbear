const { traverse } = require('./traverse');

/**
 * Transforms an AST by applying visitor modifications
 * @param {Object} node - AST node to transform
 * @returns {Object} Transformed AST node
 */
const transform = (node) => {
  const visitor = {
    CallExpression: {
      enter({ node }) {
        if (specialForms[node.name]) {
          specialForms[node.name](node);
        }
      },
    },
  };
  traverse(node, visitor);
  return node;
};

const specialForms = {
  set(node) {
    const [identifier, assignment] = node.arguments;
    node.type = 'VariableDeclaration';
    node.identifier = identifier;
    node.assignment = assignment;
    delete node.name;
    delete node.arguments;
  },
};

module.exports = { specialForms, transform };
