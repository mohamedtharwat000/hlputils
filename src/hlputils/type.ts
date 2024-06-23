/**
 * Returns the type of a value.
 *
 * @param value - The value to check.
 * @returns The type of the value (e.g., 'number', 'object', etc.).
 */
function type(value: unknown): string {
  let type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
  if (type === 'function') {
    type = Function.prototype.toString.call(value).slice(0, 8);
    type = type.startsWith('class') ? 'class' : 'function';
  }
  return type;
}

export default type;
