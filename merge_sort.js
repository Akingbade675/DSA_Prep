const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)

    const arr1 = mergeSort(arr.slice(0, mid)) // left
    const arr2 = mergeSort(arr.slice(mid)) // right

    return mergeSortedArrays(arr1, arr2)
}

const mergeSortedArrays = (arr1, arr2) => {
    let sortedArray = []
    let i = (j = 0)
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArray.push(arr1[i])
            i++
        } else {
            sortedArray.push(arr2[j])
            j++
        }
    }

    if (i < arr1.length) {
        sortedArray.push(...arr1.slice(i))
    } else if (j < arr2.length) {
        sortedArray.push(...arr2.slice(j))
    }

    return sortedArray
}

console.log(mergeSort([1, 3, 6, 9, 2, 3, 4, 5]))
console.log(mergeSort([5, 7, 8, 9, 2, 3, 4, 5]))
