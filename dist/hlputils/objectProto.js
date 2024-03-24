import type from './type.js';
/**
 * Enhances the `Object.prototype` by adding methods from the global `Object`.
 * These methods can be called on any object.
 */
function objectProto() {
    Object.getOwnPropertyNames(Object)
        .filter((property) => type(Object[property]) === 'function')
        .forEach((property) => {
        // eslint-disable-next-line no-extend-native
        Object.defineProperty(Object.prototype, property, {
            configurable: false,
            enumerable: false,
            writable: false,
            value(...args) {
                return type(this) === 'object'
                    ? Object[property](this, ...args)
                    : undefined;
            },
        });
    });
}
export default objectProto;
