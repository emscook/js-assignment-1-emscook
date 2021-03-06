'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
// TODO add comment with problem description
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples:
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

// Inspired by my dictionary approach to a befunge-93 runner I wrote for codefights https://github.com/emscook/befunge-93/blob/master/code.py
function basicOp (operation, value1, value2) {
  return {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  }[operation](value1, value2)
}
exports.basicOp = basicOp
