//Создайте собственную реализацию функции reduce().

const reduce = (arr, acc = 0) => {
    let sum = acc;
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i]
    }
    return sum
}

const TEST = [0, 1, 1, 1, 1, 1, 2, 10]


console.log(reduce(TEST))