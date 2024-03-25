"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = __importDefault(require("./type"));
/**
 * Enhances the `Object.prototype` by adding methods from the global `Object`.
 * These methods can be called on any object.
 */
function objectProto() {
    Object.getOwnPropertyNames(Object)
        .filter((property) => (0, type_1.default)(Object[property]) === 'function')
        .forEach((property) => {
        // eslint-disable-next-line no-extend-native
        Object.defineProperty(Object.prototype, property, {
            configurable: false,
            enumerable: false,
            writable: false,
            value(...args) {
                return (0, type_1.default)(this) === 'object'
                    ? Object[property](this, ...args)
                    : undefined;
            },
        });
    });
}
exports.default = objectProto;
