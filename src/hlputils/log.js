/**
 * Log to the console.
 *
 * @param {any} value - The value to log.
 * @param {string} type - The type of log (e.g., 'log', 'error', 'warn').
 * @returns {number} The length of the printed string.
 */
function log(value, type = 'log') {
  // eslint-disable-next-line no-console
  console[type](value);
  return value.length;
}

module.exports = log;
