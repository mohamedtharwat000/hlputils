/**
 * Log to the console.
 *
 * @param value - The value to log.
 * @param logType - The type of log (e.g., 'log', 'error', 'warn').
 * @returns The length of the printed string.
 */
export function log(value, logType = 'log') {
    // eslint-disable-next-line no-console
    console[logType](value);
    return value.toString().length;
}
export default log;
