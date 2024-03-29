
# hlputils

[hlputils package on npmjs.com](https://www.npmjs.com/package/hlputils)


## Description

**hlputils** is a lightweight npm package that provides a set of utility functions for common tasks in JavaScript development. It aims to simplify your code and improve its readability and maintainability.

## Installation

To install hlputils, run the following command in your terminal:

```bash
npm install hlputils
```

## Usage

Import the functions from the package:

```javascript
import hlputils from 'hlputils'
or
import { log, type, classType, objectProto, ... } from 'hlputils';
```

here are a small examples of using it

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
type(myVar); // Output: "number"

const myObject = {};
type(myObject); // Output: "object"

const myArray = [1, 2, 3];
type(myArray); // Output: "array"

const myNull = null;
type(myNull); // Output: "null"

const myUndefined = undefined;
type(myUndefined); // Output: "undefined"
```

### Class Type

The `classType` function is used to determine the class type of an object.

```javascript
class Car {}
const myCar = new Car();
classType(myCar); // Output: "car"
```

### Object Prototype

The `objectProto` function extends the `Object.prototype` with enumerable properties from the `Object` class.

```javascript
objectProto();

const obj = { name: 'John' };
const obj2 = {};

console.log(obj.is(obj2)); // Output: false
console.log(obj.hasOwnProperty('name')); // Output: true
console.log(obj.keys()); // Returns: ['name']
... // all Object methods
```

## Future Features

- **More utility functions**: The package will be expanded to include more helper functions for tasks like string manipulation, array manipulation, and working with dates and times.

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
