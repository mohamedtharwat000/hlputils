const type = require('./src/hlputils/type');
const log = require('./src/hlputils/log');
const objectProto = require('./src/hlputils/objectProto');

let scope = globalThis;

if (type(scope) === 'global') {
  scope = global;
}

if (type(scope) === 'window') {
  scope = window;
}

objectProto();
scope.type = type;
scope.log = log;
