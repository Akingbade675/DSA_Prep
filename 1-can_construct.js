/**
 * Write a function `canConstruct(target, wordBank)` that accepts a
 * target string and an array of strings.
 *
 * The function should return a boolean indicating whether or not the
 * `target` can be constructed by concatenating elements of the
 * `wordBank` array.
 *
 * You can reuse elemnts of `wordBank` as many times as needed
 */

const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false)
    table[0] = true // base case. if target is an empty string returns true

    for (let i = 0; i <= target.length; i++) {
        if (table[i] !== false) {
            for (word of wordBank) {
                const wordLength = word.length
                if (target.slice(i, i + wordLength) === word) {
                    table[i + wordLength] = true
                }
            }
        }
    }

    return table[target.length]
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
