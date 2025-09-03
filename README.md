# 🐻 Dropbear Programming Language

A sophisticated, Lisp-inspired programming language built in JavaScript with a focus on clean architecture, extensibility, and educational value. Dropbear demonstrates modern language implementation techniques including lexical analysis, recursive descent parsing, and tree-walking interpretation.

## ✨ Features

### 🧮 **Mathematical Operations**
- **Arithmetic**: `add`, `subtract`, `multiply`, `divide`, `modulo`
- **Comparison**: `max`, `min` functions for finding highest/lowest values
- **Constants**: Built-in `pi` constant
- **Flexible Arguments**: Most math functions accept variable numbers of arguments

### 📝 **Data Types**
- **Numbers**: Integer support with multi-digit parsing
- **Strings**: Quoted string literals with whitespace handling
- **Identifiers**: Variable names and function calls
- **Expressions**: Nested function calls and complex expressions

### 🔧 **Language Features**
- **Lisp-like Syntax**: Parenthesized prefix notation
- **REPL Interface**: Interactive command-line interface with colored output
- **File Execution**: Run `.dbr` files directly from command line
- **Whitespace Insensitive**: Flexible spacing and formatting
- **Error Handling**: Comprehensive error messages for invalid syntax

### 🏗️ **Advanced Architecture**
- **Lexer**: Advanced tokenization with character classification
- **Parser**: Recursive descent parsing with AST generation
- **Evaluator**: Tree-walking interpreter with environment management
- **Standard Library**: Built-in functions and constants
- **Extensible**: Framework for special forms and custom syntax

## 🧠 **Technical Implementation**

### **Lexical Analysis (Tokenization)**
Dropbear uses a **maximal munch** tokenization strategy, meaning it consumes the longest possible sequence of characters that matches a token pattern. This ensures efficient parsing and clear token boundaries.

```javascript
// Example: "123" is consumed as a single number token, not "1", "2", "3"
// Example: "add" is consumed as a single identifier, not "a", "d", "d"
```

**Token Types:**
- `Number`: Multi-digit integers (e.g., `123`, `456`)
- `String`: Quoted literals (e.g., `"hello world"`)
- `Name`: Identifiers and function names (e.g., `add`, `multiply`)
- `Parenthesis`: Opening and closing parentheses

### **Abstract Syntax Tree (AST)**
The language generates a rich AST structure that represents the hierarchical nature of expressions:

```javascript
// Input: (add 2 (multiply 3 4))
// AST Structure:
{
  type: 'CallExpression',
  name: 'add',
  arguments: [
    { type: 'NumericLiteral', value: 2 },
    {
      type: 'CallExpression',
      name: 'multiply',
      arguments: [
        { type: 'NumericLiteral', value: 3 },
        { type: 'NumericLiteral', value: 4 }
      ]
    }
  ]
}
```

### **Parsing Strategy**
- **Recursive Descent**: Top-down parsing that naturally handles nested expressions
- **Parenthesized Expressions**: Automatic grouping and precedence through parentheses
- **Error Recovery**: Graceful handling of malformed input with descriptive error messages

### **Evaluation Engine**
- **Tree Walking**: Traverses the AST to execute expressions
- **Environment Management**: Maintains a global scope for built-in functions
- **Function Application**: Supports both built-in and extensible function calls

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd dropbear

# Install dependencies
npm install

# Make the CLI executable
chmod +x bin/dropbear
```

### Usage

#### Interactive REPL
```bash
npm start
# or
./bin/dropbear
```

#### Run a File
```bash
./bin/dropbear run examples/example.dbr
```

#### Programmatic Usage
```javascript
const { parseAndEvaluate } = require('./src');

const result = parseAndEvaluate('(add 2 3)');
console.log(result); // 5
```

## 📚 Language Examples

### Basic Math
```lisp
(add 2 3)                    ; Returns 5
(multiply 4 5)               ; Returns 20
(subtract 10 3)              ; Returns 7
(divide 15 3)                ; Returns 5
(modulo 17 5)                ; Returns 2
```

### Nested Expressions
```lisp
(multiply (add 2 2) (subtract 10 5))  ; Returns 20
(add 1 2 3 4 5)                       ; Returns 15
(max 3 7 2 9 1)                       ; Returns 9
(min 5 2 8 1 6)                       ; Returns 1
```

### String Operations
```lisp
(log "Hello, World!")        ; Prints: Hello, World!
(log "Multiple" "strings")   ; Prints: Multiple strings
```

### Constants
```lisp
pi                           ; Returns 3.141592653589793
```

## 🏗️ Project Structure

```
src/
├── index.js                 # Main entry point and public API
├── tokenize.js             # Lexical analysis with maximal munch
├── parse.js                # Recursive descent parser
├── evaluate.js             # Tree-walking interpreter
├── standard-library.js     # Built-in functions and environment
├── repl.js                 # Interactive shell with colored output
├── utilities.js            # Helper functions (pipe, peek, pop)
├── identify.js             # Character classification utilities
├── special-forms.js        # Special syntax support (extensible)
├── transform.js            # AST transformations framework
├── traverse.js             # Tree traversal utilities
├── to-javascript.js        # JavaScript code generation (planned)
└── parse-program.js        # Program parsing (planned)
```

## 🧪 Testing

```bash
npm test
```

The comprehensive test suite covers:
- **Tokenization**: Various input types and edge cases
- **Parsing**: Expression parsing and AST generation
- **Evaluation**: Mathematical operations and function calls
- **Error Handling**: Invalid syntax and runtime errors
- **AST Operations**: Transformations and traversal

## 🔧 Development

### Adding New Functions
Extend the standard library in `src/standard-library.js`:

```javascript
const newFunction = (...args) => {
  // Your function logic here
  return result;
};

const environment = {
  // ... existing functions
  newFunction,
};
```

### Adding Special Forms
Implement custom syntax in `src/special-forms.js`:

```javascript
const specialForms = {
  if: (args, scope) => {
    // Custom if statement implementation
  }
};
```

## 📖 Language Specification

### Syntax
- **Numbers**: `123`, `456`, `789` (multi-digit support)
- **Strings**: `"hello world"` (quoted literals)
- **Identifiers**: `function-name`, `variable_name` (alphanumeric)
- **Expressions**: `(function arg1 arg2)` (parenthesized)
- **Whitespace**: Ignored between tokens (flexible formatting)

### Evaluation Rules
1. **Literals**: Numbers and strings evaluate to themselves
2. **Identifiers**: Looked up in the global environment
3. **Function Calls**: Arguments evaluated recursively, then function applied
4. **Nested Expressions**: Evaluated from innermost to outermost

### Built-in Functions
- **Math**: `add`, `subtract`, `multiply`, `divide`, `modulo`
- **Comparison**: `max`, `min` (variable arguments)
- **Output**: `log` (console output)
- **Constants**: `pi` (mathematical constant)

## 🚀 **What's Next**

Check out our [ROADMAP.md](./ROADMAP.md) for detailed development plans and upcoming features!

## 🎯 Use Cases

- **Educational**: Learn about language implementation and compiler design
- **Prototyping**: Quick mathematical computations and algorithm testing
- **Embedded**: Lightweight scripting in JavaScript applications
- **Research**: Experiment with new language features and syntax
- **Production**: Build domain-specific languages and tools

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Add tests for new functionality
4. Ensure all tests pass (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### **Development Guidelines**
- Follow existing code style and patterns
- Add comprehensive tests for new features
- Update documentation for API changes
- Consider performance implications of changes

## 📄 License

MIT License - see LICENSE file for details.

---

**Dropbear** - A sophisticated, extensible programming language that demonstrates modern language implementation techniques. Built for learning, experimentation, and building the next generation of domain-specific languages.
