const isSorted = (arr) => {
	let arrPrev = arr
	arr.sort((prev, curr) => {
		return prev - curr
	})
	console.log(arr)
	for (let i = 0; i < arr.length; ++i) {
		let p = Number(arr[i])
		if (arrPrev[i] === p) {
			return false
		}
	}

	return true
}
const TEST = [1, 2, 3, 4, 5, 6, 7, 8, 9]


console.log(isSorted(TEST))

// do not work/ fuck