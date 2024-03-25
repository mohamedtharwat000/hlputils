import type from './type.js'; // Assuming 'type' module exports a 'Type' function
/**
 * Returns the class type of an object.
 *
 * @param value - The value to check.
 * @returns {string} The class type of the value (lowercase).
 */
export function classType(value) {
    return type(value) === 'object' && value?.constructor
        ? value.constructor.name.toLowerCase()
        : type(value);
}
export default classType;
