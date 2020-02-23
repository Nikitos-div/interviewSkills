//рекурсивный

const factorial = (num) => {
    if (num === 0) return 1
    return num * factorial(num - 1)
}

console.log(factorial(6))

//нерекурсивный 


const factorialNotR = (num) => {
    let sum = 1
    for (let i = num; i > 0; i -= 1) {
        sum = sum * (i)
    }
    return sum
}


console.log(factorialNotR(6))