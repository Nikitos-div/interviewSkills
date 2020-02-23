const filter = (arr, restrict) => {
    let filt = []
    arr.forEach(item => {
        if (restrict < item) {
            filt.push(item)
        }
    })
    return filt
}

const TEST = [1, 2, 3, 4, 6, 134, 12, 1, 3]
console.log(filter(TEST, 4))

