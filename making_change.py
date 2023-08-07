#!/usr/bin/python3
"""
Interview Question on: fewest number of coins needed to
meet a given amount total
"""


def makeChange(coins, total):   # ([1, 2, 4], 7)
    """ fewest number of coins needed to meet total """
    if total <= 0:
        return 0
    # sort the coins in descending order
    coins.sort(reverse=True)   # [4, 2, 1]
    change = 0
    for coin in coins:
        if total <= 0:
            break
        temp = total // coin  # 7 // 4 = 1
        change += temp # 1
        total -= (temp * coin) # 7 - (1 * 4) = 3
    if total != 0:
        return -1
    return change


print(makeChange([1, 2, 4], 7))
print(makeChange([1, 2, 25], 37))
print(makeChange([1, 2, 4, 7], 7))
print(makeChange([1, 2], 0))
print(makeChange([2, 4], 7))
print(makeChange([1, 2, 5, 25], 100))
print(makeChange([1256, 54, 48, 16, 102], 1453))