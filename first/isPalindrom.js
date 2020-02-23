const isPalindrom = (str) => {
    if (str === str.split('').reverse().join('')) return true
    else {
        console.log(str.split(''))
        console.log(str.split('').reverse())
        console.log(str.split('').reverse().join(''))
        return false
    }

}


console.log(isPalindrom('A man a plan a cal Panama'))
