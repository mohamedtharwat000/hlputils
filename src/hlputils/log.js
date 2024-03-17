/**
 * Log to the console.
 *
 * @param {any} value - The value to log.
 * @param {string} type - The type of log (e.g., 'log', 'error', 'warn').
 */
function log(value, type = 'log') {
  // eslint-disable-next-line no-console
  console[type](value);
}

module.exports = log;
