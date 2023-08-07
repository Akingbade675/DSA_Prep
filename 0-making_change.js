/*
  Given a pile of coins of different values,
  determine the fewest number of coins needed to meet a given amount `total`.

    -   Prototype: `def makeChange(coins, total)`
    -   Return: fewest number of coins needed to meet `total`
      -   If `total` is `0` or less, return `0`
      -   If `total` cannot be met by any number of coins you have, return `-1`
    -   `coins` is a list of the values of the coins in your possession
    -   The value of a coin will always be an integer greater than `0`
    -   You can assume you have an1 infinite number of each denomination of coin in the list
*/

// The problem is solved using the dynamic programming algorithmic approach

// using memoization approach:
// const makeChange = (coins, total, memo = {}) => {
//     if (total in memo) return memo[total]
//     if (total === 0) return 0
//     if (total < 0) return -1

//     let fewestCoin = -1

//     for (let coin of coins) {
//         let remainingChange = total - coin
//         const result = makeChange(coins, remainingChange, memo)
//         if (result >= 0 && (fewestCoin === -1 || result < fewestCoin))
//             fewestCoin = result + 1
//     }
//     memo[total] = fewestCoin
//     return fewestCoin
// }

// using tabulation approach:
const makeChange = (coins, total) => {
    if (total <= 0) return 0

    let table = Array(total + 1).fill(-1)
    table[0] = 0

    for (let i = 0; i <= total; i++) {
        if (table[i] !== -1) {
            for (let coin of coins) {
                const ways = table[i] + 1
                if (table[i + coin] === -1 || ways < table[i + coin]) {
                    table[i + coin] = ways
                }
            }
        }
    }

    return table[total]
}

console.log(makeChange([1, 2, 25], 37))
console.log(makeChange([1, 2, 4], 7))
console.log(makeChange([1, 2, 4, 7], 7))
console.log(makeChange([1, 2], 0))
console.log(makeChange([2, 4], 7))
console.log(makeChange([1, 2, 5, 25], 100))
console.log(makeChange([1256, 54, 48, 16, 102], 1453))
