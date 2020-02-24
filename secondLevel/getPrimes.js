const TEST = 200
///алгоритм Эратосфена

const getPrimes = (n) => {
	let numbers = []
	let primes
	numbers.push(2)
	for (let i = 1; i < n - 1; ++i) {
		numbers.push(numbers[i - 1] + 1)
	}

	// for (let i = 0; i < numbers.length; ++i) {
	// 	if (numbers[i] % 2 && numbers[i] && 5 || numbers[i] && 3 || numbers[i] && 7) {
	// 		primes.push(numbers[i])
	// 	}
	// }
	// console.log(primes)

	primes = numbers.filter(item => item === 2 || item % 2 > 0)
	primes = primes.filter(item => item === 3 || item % 3 > 0)
	primes = primes.filter(item => item === 5 || item % 5 > 0)
	primes = primes.filter(item => item === 7 || item % 7 > 0)

	console.log(primes)
}

getPrimes(TEST)

