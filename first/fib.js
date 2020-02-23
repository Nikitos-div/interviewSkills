const fib = (n) => {
    let first = 0;
    let second = 1;
    let third = first + second;
    for (let i = 1; i < n; ++i) {
        third = second + first;
        first = second
        second = third
    }
    return third

}

console.log(fib(20))