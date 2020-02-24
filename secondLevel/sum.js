// function sum(a) {

//     let currentSum = a;

//     function f(b) {
//         currentSum += b;
//         return f;
//     }

//     f.toString = function () {
//         return currentSum;
//     };

//     return f;
// }

function sum1(num) {
    let currentSum = num;

    function cache(n) {
        currentSum += n
        console.log(currentSum)
        console.log(cache)
        return cache;
    }

    cache.toString = function () {

        return currentSum;
    }
    return cache
}


sum(1)(2)(3)(1)


const sum = a => function f(b) {
    f.toString = () => a;
    a += b;
    return f;
};

console.log