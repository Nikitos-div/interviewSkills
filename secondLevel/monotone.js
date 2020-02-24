const TEST = [1, 3, 5, 7, 9, 0, 1]
const TEST2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const monotone = (arr) => {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] > arr[i + 1]) {
            return false
        }

    }
    return true
}

console.log(monotone(TEST))
console.log(monotone(TEST2))