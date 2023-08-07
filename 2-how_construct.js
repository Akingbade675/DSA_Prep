/**
 * Write a function `allConstruct(target, wordBank)` that accepts a
 * target string and an array of strings.
 *
 * The function should return a 2D array containing all the ways that
 * the `target` can be constructed by concatenating elements of the
 * `wordBank` array. Each element of the 2D array should represent
 * one combination that constructs the `target`.
 *
 * You can reuse elemnts of `wordBank` as many times as needed.
 */

const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map((arr) => [])
    table[0] = [[]]

    // loop through the table
    for (let i = 0; i <= target.length; i++) {
        if (table[i].length !== 0) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    const newWays = table[i].map((way) => [...way, word])
                    table[i + word.length].push(...newWays)
                }
            }
        }
    }

    return table[target.length]
}

/**
 * m - target.length
 * n - wordBank.length
 * time complexity  - O(n^m)
 * space complexity - O(n^m)
 */

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
// [ [ 'abc', 'def' ] ]

console.log(
    allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
)
// [
//   [ 'abc', 'def' ],
//   [ 'ab', 'c', 'def' ],
//   [ 'abcd', 'ef' ],
//   [ 'ab', 'cd', 'ef' ]
// ]

console.log(allConstruct('aaa', ['a', 'aa', 'aaa']))
// [ [ 'aaa' ], [ 'a', 'aa' ], [ 'aa', 'a' ], [ 'a', 'a', 'a' ] ]
