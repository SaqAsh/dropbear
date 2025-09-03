/**
 * Traverses a single AST node and applies visitor methods
 * @param {Object} params - Traversal parameters
 * @param {Object} params.node - AST node to traverse
 * @param {Object} params.parent - Parent node
 * @param {Object} params.visitor - Visitor object with enter/exit methods
 */
const traverseNode = ({ node, parent, visitor }) => {
  const methods = visitor[node.type];

  if (methods && methods.enter) {
    methods.enter({ node, parent });
  }

  if (node.arguments) {
    traverseArray({ array: node.arguments, parent: node, visitor });
  }

  if (methods && methods.exit) {
    methods.exit({ node, parent });
  }
};

/**
 * Traverses an array of AST nodes
 * @param {Object} params - Traversal parameters
 * @param {Array} params.array - Array of AST nodes
 * @param {Object} params.parent - Parent node
 * @param {Object} params.visitor - Visitor object with enter/exit methods
 */
const traverseArray = ({ array, parent, visitor }) => {
  array.forEach((node) => {
    traverseNode({ node, parent, visitor });
  });
};

/**
 * Main traversal function that visits all nodes in an AST
 * @param {Object} node - Root AST node to traverse
 * @param {Object} visitor - Visitor object defining enter/exit behavior
 */
const traverse = (node, visitor) => {
  traverseNode({ node, visitor });
};

module.exports = { traverse };
