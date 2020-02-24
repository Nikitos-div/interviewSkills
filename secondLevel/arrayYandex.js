// Сжатие целочисленного массива
// ([3, 2, 1, 5, 6, -1, 10]) => "-1,1-3,5-6,10"

const TEST = [2, 3, 4, 1, 5, 0, 0, -1, 10, 2]
const compression = (arr) => {
    let str = []
    arr.sort((a, b) => {
        return a - b
    })
    for (let i = 0; i < arr.length; ++i) {

    }


    console.log(TEST)

}

compression(TEST)

