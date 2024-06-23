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
import { log, type, classType, objectProto, asyncjson } from 'hlputils';
```

### Logging

Use the `log` function to log messages and return it's length. The function takes two parameters: the message and the type of the message. The type can be ‘log’, ‘error’, ‘warn’, or ‘table’. If no type is provided, it defaults to a general log message.

```javascript
log('This is a log message'); // Output: This is a log message
log('This is an error message', 'error'); // Output: This is an error message
```

### Type Checking

The `type` function returns the type of the passed value as a string.

```javascript
type([]); // Output: "array"
type(null); // Output: "null"
type(class c {}); // Output: "class"
```

### Class Type

The `classType` function returns the class type of an object.

```javascript
classType(new Date()); // Output: "Date"
```

### Object Prototype Enhancement

The `objectProto` function enhances the `Object.prototype` by adding static methods from the global `Object`.

```javascript
objectProto();

const obj = { name: 'John', age: 30 };
const obj2 = { name: 'Jane', age: 25 };

obj.is(obj2); // Output: false
obj.hasOwnProperty('name'); // Output: true
Object.keys(obj); // Output: ['name', 'age']
// .etc for all Object static methods
```

### Async JSON Operations

The `asyncjson` function is an asynchronous operation that allows you to convert objects to JSON strings and vice versa without blocking the code execution. It provides two methods: `fromJS` and `toJS`.

The `fromJS` method takes an object as input and returns a promise that resolves to the corresponding JSON string. Here's an example usage:

```javascript
asyncjson.fromJS({ hello: 'world' }); // Output: '{"hello":"world"}'
```

The `toJS` method takes a JSON string as input and returns a promise that resolves to the corresponding JavaScript object. Here's an example usage:

```javascript
asyncjson.toJS('{"hello":"world"}'); // Output: { hello: 'world' }
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
