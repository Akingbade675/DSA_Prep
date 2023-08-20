// You are given an m x n integer array grid. There is a robot
// initially located at the top - left corner(i.e., grid[0][0]).
// The robot tries to move to the bottom - right corner(i.e., grid[m - 1][n - 1]).
// The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid.
// A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach
// the bottom - right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Example 2:

// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1

// Constraints:

// m == obstacleGrid.length
// n == obstacleGrid[i].length
// 1 <= m, n <= 100
// obstacleGrid[i][j] is 0 or 1.

// -> Memoization Technique of Dynamic Programming
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstaclesMemoize = function (obstacleGrid) {
    const row = obstacleGrid.length - 1
    const column = obstacleGrid[0].length - 1
    let memo = {}

    function findPath(m, n) {
        const key = `${m},${n}`
        if (key in memo) return memo[key]

        if (m > row || n > column) return 0
        if (obstacleGrid[m][n] === 1) return 0

        if (m === row && n === column) return 1

        memo[key] = findPath(m, n + 1) + findPath(m + 1, n)
        return memo[key]
    }

    return findPath(0, 0)
}

// -> Tabulation Technique of Dynamic Programming
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstaclesTabulate = function (obstacleGrid) {
    const row = obstacleGrid.length
    const column = obstacleGrid[0].length

    let table = Array(row + 1)
        .fill(0)
        .map((r) => Array(column + 1).fill(0))
    table[0][1] = 1

    for (let i = 1; i < row + 1; i++) {
        for (let j = 1; j < column + 1; j++) {
            if (obstacleGrid[i - 1][j - 1] === 1) {
                table[i][j] = 0
            } else {
                table[i][j] = table[i - 1][j] + table[i][j - 1]
            }
        }
    }
    return table[row][column]
}

// EXAMPLES
console.log(
    uniquePathsWithObstaclesMemoize([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ])
) //2
console.log(
    uniquePathsWithObstaclesTabulate([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ])
) //2

console.log(
    uniquePathsWithObstaclesMemoize([
        [0, 1],
        [0, 0],
    ])
) // 1
