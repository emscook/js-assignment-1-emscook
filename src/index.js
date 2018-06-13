// TODO import solution function from lib.js
import { basicOp } from './lib'
// Imported actual test framework
import { Test } from './framework'
// TODO add some example test cases and log their results to the console
console.log('Codewars Tests:')
console.log(`Testing basicOp('+', 4, 7) === 11`)
Test.assertSimilar(basicOp('+', 4, 7), 11)

console.log(`Testing basicOp('-', 15, 18) === -3`)
Test.assertSimilar(basicOp('-', 15, 18), -3)

console.log(`Testing basicOp('*', 5, 5) === 25`)
Test.assertSimilar(basicOp('*', 5, 5), 25)

console.log(`Testing basicOp('/', 49, 7) === 7`)
Test.assertSimilar(basicOp('/', 49, 7), 7)
console.log(
  `My Tests:
[Addition] Calling "basicOp('+', 5, 6)" returned: ${basicOp('+', 5, 6)}
Test ${basicOp('+', 5, 6) === 11 ? 'Passed' : 'Failed'}!
[Subtraction] Calling "basicOp('-', 100, 6)" returned: ${basicOp('-', 100, 6)}
Test ${basicOp('-', 100, 6) === 94 ? 'Passed' : 'Failed'}!
[Multiplication] Calling "basicOp('*', 5, 6)" returned: ${basicOp('*', 5, 6)}
Test ${basicOp('*', 5, 6) === 30 ? 'Passed' : 'Failed'}!
[Division] Calling "basicOp('/', 30, 6)" returned: ${basicOp('/', 30, 6)}
Test ${basicOp('/', 30, 6) === 5 ? 'Passed' : 'Failed'}!
`
)
