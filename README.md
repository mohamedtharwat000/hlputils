# Project Title

hlputils

## Description

**hlputils** is a lightweight npm package that provides a set of utility functions for common tasks in JavaScript development. It aims to simplify your code and improve its readability and maintainability.

## Installation

To install hlputils, run the following command in your terminal:

```bash
npm install hlputils
```

## Usage

Import the the package:

```javascript
import 'hlputils';
```

### Logging

Use the log function to log messages. The function takes two parameters: the message and the type of the message. The type can be ‘error’, ‘warn’, or ‘info’. If no type is provided, it defaults to a general log message.

```javascript
log('This is a log message'); // Output: "LOG: This is a log message"
log('This is an error message', 'error'); // Output: "ERROR: This is an error message"
log('This is a warning message', 'warn'); // Output: "WARN: This is a warning message"
log('This is an info message', 'info'); // Output: "INFO: This is an info message"
```

### Type Checking

The type function can be used to check the type of a variable. It returns a string that represents the type of the variable.

```javascript
const myVar = 10;
console.log(type(myVar)); // Output: "number"

const myObject = {};
console.log(type(myObject)); // Output: "object"

const myArray = [1, 2, 3];
console.log(type(myArray)); // Output: "array"

const myNull = null;
console.log(type(myNull)); // Output: "null"

const myUndefined = undefined;
console.log(type(myUndefined)); // Output: "undefined"
```

### Enhanced Object Prototype

```javascript
const myObject = { a: 1, b: 2 };

// Check if the object has a property
console.log(myObject.hasOwnProperty('a')); // Output: true

// Get all property keys
console.log(myObject.keys()); // Output: ["a", "b"]

// Get all property values
console.log(myObject.values()); // Output: [1, 2]

all Object methods...
```

## Future Features

- **More utility functions**: The package will be expanded to include more helper functions for tasks like string manipulation, array manipulation, and working with dates and times.
- **TypeScript support**: TypeScript definitions will be added to provide type safety and improved developer experience.

## Contributing

Contributions are welcome! Here are some ways you can contribute to this project:

- Report bugs and issues by creating a new GitHub issue.
- Fix bugs and issues by submitting pull requests.
- Add new validation functionality to enhance the form's capabilities.
- Improve styling and overall user experience.
- Refactor code to improve code quality and maintainability.
- Write documentation and improve existing docs to help others understand the project.

To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Submit a pull request, describing your changes in detail.

I will review pull requests and provide feedback.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Created by [Mohamed Tharwat](https://github.com/mohamedtharwat000). Feel free to reach out with any questions or feedback.
