/**
 * Check if it is possible to convert (a, b) to (c, d)
 * by performing on (a, b) any of the following operation,
 * zero or more times.
 * (a, b) -> (a + b, b)
 * (a, b) -> (a, a + b)
 *
 * @param {number} a - The first number in the initial pair (a, b)
 * @param {number} b - The second number in the initial pair (a, b)
 * @param {number} c - The first number in the target pair (c, d)
 * @param {number} d - The second number in the target pair (c, d)
 * @returns {string} - 'Yes' if (a, b) can be converted to (c, d), 'No' otherwise

 */

function isPossible(a, b, c, d) {
    if (a > c || b > d) return 'No'

    if (a === c && b === d) return 'Yes'

    const isPossibleWithFirstOperation = isPossible(a + b, b, c, d)
    if (isPossibleWithFirstOperation === 'Yes') return 'Yes'

    const isPossibleWithSecondOperation = isPossible(a, a + b, c, d)

    return isPossibleWithSecondOperation === 'Yes' ? 'Yes' : 'No'
}

console.log(isPossible(1, 2, 3, 6)) // Yes
console.log(isPossible(1, 2, 3, 7)) // No
console.log(isPossible(1, 4, 5, 9)) // Yes

// Flow
// 1. The function first checks if a is greater than c or b is greater than d. If either of these conditions is true, it means that it is not possible to convert (a, b) to (c, d) using the given operations, so the function returns 'No'.
// 2. Next, the function checks if a is equal to c and b is equal to d. If this condition is true, it means that we have reached the target pair (c, d) using the given operations, so the function returns 'Yes'.
// 3. If the above conditions are not met, the function recursively calls itself twice with updated values of a and b:
//    - In the first recursive call, it adds b to a and keeps b unchanged.
//    - In the second recursive call, it adds a to b and keeps a unchanged.
// 4. The function then checks the results of the recursive calls. If either of the recursive calls returns 'Yes', it means that it is possible to reach the target pair (c, d), so the function returns 'Yes'. Otherwise, it returns 'No'.
// ___
// Complexity
// Time Complexity: O(2 < sup > n</ >), where n is the number of recursive calls.
// Space Complexity: O(n), where n is the number of recursive calls.
