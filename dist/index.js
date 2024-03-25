"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectProto = exports.classType = exports.type = exports.log = void 0;
const log_1 = __importDefault(require("./hlputils/log"));
exports.log = log_1.default;
const type_1 = __importDefault(require("./hlputils/type"));
exports.type = type_1.default;
const classType_1 = __importDefault(require("./hlputils/classType"));
exports.classType = classType_1.default;
const objectProto_1 = __importDefault(require("./hlputils/objectProto"));
exports.objectProto = objectProto_1.default;
exports.default = { log: log_1.default, type: type_1.default, classType: classType_1.default, objectProto: objectProto_1.default };
