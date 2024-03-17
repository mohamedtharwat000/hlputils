const type = require('./type');

/**
 * Enhances the `Object.prototype` by adding methods from the global `Object`.
 * These methods can be called on any object.
 *
 * @function
 * @name objectProto
 * @returns {undefined} Returns `undefined`.
 *
 * @example
 * const myObject = { a: 1, b: 2 };
 *
 * // Now you can use methods like `myObject.hasOwnProperty()`
 * myObject.hasOwnProperty('a'); // true
 * myObject.hasOwnProperty('c'); // false
 */
function objectProto() {
  Object.getOwnPropertyNames(Object)
    .filter((property) => type(Object[property]) === 'function')
    .forEach((property) => {
      // eslint-disable-next-line no-extend-native
      Object.defineProperty(Object.prototype, property, {
        configurable: false,
        enumerable: false,
        writable: false,
        value(...args) {
          return type(this) === 'object'
            ? Object[property](this, ...args)
            : undefined;
        },
      });
    });
}

module.exports = objectProto;
