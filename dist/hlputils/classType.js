"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = __importDefault(require("./type"));
/**
 * Returns the class type of an object.
 *
 * @param value - The value to check.
 * @returns {string} The class type of the value (lowercase).
 */
function classType(value) {
    return (0, type_1.default)(value) === 'object' && value?.constructor
        ? value.constructor.name.toLowerCase()
        : (0, type_1.default)(value);
}
exports.default = classType;
