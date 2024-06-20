/**
 * Returns the type of a value.
 *
 * @param value - The value to check.
 * @returns The type of the value (e.g., 'number', 'object', etc.).
 */
function type(value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
export default type;
//# sourceMappingURL=type.js.map