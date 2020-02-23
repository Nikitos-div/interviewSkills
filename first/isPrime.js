const isPrime = (number) => {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let j = 3; j * j <= number; j += 2) {
        if (number % j == 0) return false;
    }
    return true;
}

console.log(isPrime(17))


//если true то простое
