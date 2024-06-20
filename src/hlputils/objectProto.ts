import type from './type.js';

/**
 * Enhances the `Object.prototype` by adding methods from the global `Object`.
 * These methods can be called on any object.
 */
function objectProto(): void {
  const OPM = Object.getOwnPropertyDescriptors(Object);

  for (const fn in OPM) {
    if (type(OPM[fn]) === 'function') {
      Object.defineProperty(Object.prototype, fn, {
        ...OPM[fn],
        value(...args: unknown[]) {
          return type(this) === 'object' && OPM[fn].value(this, ...args);
        },
      });
    }
  }
}

export default objectProto;
