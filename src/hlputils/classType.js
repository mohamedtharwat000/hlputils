const type = require('./type');
/**
 * Returns the class type of an object.
 *
 * @param {any} value - The value to check.
 * @returns {string} The class type of the value.
 */
function classType(value) {
  return type(value) === 'object' && value.constructor
    ? value.constructor.name.toLowerCase()
    : type(value);
}
module.exports = classType;
