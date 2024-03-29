import type from './type';

/**
 * Returns the class type of an object.
 *
 * @param value - The value to check.
 * @returns {string} The class type of the value (lowercase).
 */
function classType(value: unknown): string {
  return type(value) === 'object' && value?.constructor
    ? value.constructor.name.toLowerCase()
    : type(value);
}

export default classType;
