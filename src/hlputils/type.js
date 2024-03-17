/**
 * Returns the type of a value.
 *
 * @param {any} value - The value to check.
 * @returns {string} The type of the value (e.g., 'number', 'object', etc.).
 */
function type(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
module.exports = type;
