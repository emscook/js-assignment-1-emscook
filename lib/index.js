'use strict';

var _lib = require('./lib');

var _framework = require('./framework');

// TODO add some example test cases and log their results to the console
// TODO import solution function from lib.js
console.log('Codewars Tests:');
// Imported actual test framework

console.log(`Testing basicOp('+', 4, 7) === 11`);
_framework.Test.assertSimilar((0, _lib.basicOp)('+', 4, 7), 11, 'Oh no.');
console.log('Passed!');
console.log(`Testing basicOp('-', 15, 18) === -3`);
_framework.Test.assertSimilar((0, _lib.basicOp)('-', 15, 18), -3);
console.log('Passed!');
console.log(`Testing basicOp('*', 5, 5) === 25`);
_framework.Test.assertSimilar((0, _lib.basicOp)('*', 5, 5), 25);
console.log('Passed!');
console.log(`Testing basicOp('/', 49, 7) === 7`);
_framework.Test.assertSimilar((0, _lib.basicOp)('/', 49, 7), 7);
console.log('Passed!');
console.log(`My Tests:
[Addition] Calling "basicOp('+', 5, 6)" returned: ${(0, _lib.basicOp)('+', 5, 6)}
Test ${(0, _lib.basicOp)('+', 5, 6) === 11 ? 'Passed' : 'Failed'}!
[Subtraction] Calling "basicOp('-', 100, 6)" returned: ${(0, _lib.basicOp)('-', 100, 6)}
Test ${(0, _lib.basicOp)('-', 100, 6) === 94 ? 'Passed' : 'Failed'}!
[Multiplication] Calling "basicOp('*', 5, 6)" returned: ${(0, _lib.basicOp)('*', 5, 6)}
Test ${(0, _lib.basicOp)('*', 5, 6) === 30 ? 'Passed' : 'Failed'}!
[Division] Calling "basicOp('/', 30, 6)" returned: ${(0, _lib.basicOp)('/', 30, 6)}
Test ${(0, _lib.basicOp)('/', 30, 6) === 5 ? 'Passed' : 'Failed'}!
`);