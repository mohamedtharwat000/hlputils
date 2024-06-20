/**
 * Log to the console.
 *
 * @param value - The value to log.
 * @param logType - The type of log (e.g., 'log', 'error', 'warn').
 * @returns The length of the printed string.
 */
function log(
  value: unknown,
  logType: 'log' | 'error' | 'warn' | 'table' = 'log'
): number {
  console[logType](value);
  return String(value).length;
}

export default log;
