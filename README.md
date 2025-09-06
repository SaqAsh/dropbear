# Dropbear Programming Language

A Lisp-inspired programming language built in JavaScript with a focus on clean architecture, and extensibility. Dropbear demonstrates modern language implementation techniques including lexical analysis, recursive descent parsing, and tree-walking interpretation.

## Features

### Mathematical Operations

- **Arithmetic**: `add`, `subtract`, `multiply`, `divide`, `modulo`
- **Comparison**: `max`, `min` functions for finding highest/lowest values
- **Constants**: Built-in `pi` constant
- **Flexible Arguments**: Most math functions accept variable numbers of arguments

### Data Types

- **Numbers**: Integer support with multi-digit parsing
- **Strings**: Quoted string literals with whitespace handling
- **Identifiers**: Variable names and function calls
- **Expressions**: Nested function calls and complex expressions

### Language Features

- **Lisp-like Syntax**: Parenthesized prefix notation
- **REPL Interface**: Interactive command-line interface with colored output
- **File Execution**: Run `.dbr` files directly from command line
- **Whitespace Insensitive**: Flexible spacing and formatting
- **Error Handling**: Comprehensive error messages for invalid syntax

### Architecture

- **Lexer**: Advanced tokenization with character classification
- **Parser**: Recursive descent parsing with AST generation
- **Evaluator**: Tree-walking interpreter with environment management
- **Standard Library**: Built-in functions and constants
- **Extensible**: Framework for special forms and custom syntax

## Getting Started

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

## Language Examples

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

## Project Structure

```
src/
├── index.js                 # Main entry point and public API
├── tokenize.js             # Lexical analysis with maximal munch
├── parse.js                # Recursive descent pa
```
