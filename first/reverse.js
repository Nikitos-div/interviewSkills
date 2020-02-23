const reverse = (str) => {
    let newStr = str.split(',')
    let j = newStr.length - 1
    for (let i = 0; i < newStr.length; ++i) {
        let swap = newStr[i]
        newStr[i] = newStr[j]
        newStr[j] = swap
        j = j - 1
    }

    str = newStr.join('')
    console.log(str)
}


const TEST = 'hui'


reverse(TEST)
