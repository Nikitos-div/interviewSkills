# interviewSkills
Простые задания

Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым.

isPrime(0)                          // false
isPrime(1)                          // false
isPrime(17)                         // true
isPrime(10000000000000)             // false

Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.

factorial(0)                        // 1
factorial(1)                        // 1
factorial(6)                        // 720

Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.

fib(0)                              // 0
fib(1)                              // 1
fib(10)                             // 55
fib(20)                             // 6765

Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

isSorted([])                        // true
isSorted([-Infinity, -5, 0, 3, 9])  // true
isSorted([3, 9, -3, 10])            // false

Создайте собственную реализацию функции filter().

filter([1, 2, 3, 4], n => n < 3)    // [1, 2]

Создайте собственную реализацию функции reduce().

reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10

Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки. Не пользуйтесь встроенной функцией reverse().

reverse('')                         // ''
reverse('abcdef')                   // 'fedcba'

Создайте собственную реализацию функции indexOf() для массивов.

indexOf([1, 2, 3], 1)               // 0
indexOf([1, 2, 3], 4)               // -1

Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того, является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию в строке пробелов).

isPalindrome('')                                // true
isPalindrome('abcdcba')                         // true
isPalindrome('abcd')                            // false
isPalindrome('A man a plan a canal Panama')     // true

Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются) от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число, либо их может не быть вовсе.

Способны ли вы добиться того, чтобы функция решала задачу за время O(N)? Подсказка: есть одна хорошая формула, которой вы можете воспользоваться.

missing([])                         // undefined
missing([1, 4, 3])                  // 2
missing([2, 3, 4])                  // 1
missing([5, 1, 4, 2])               // 3
missing([1, 2, 3, 4])               // undefined

Реализуйте функцию isBalanced() которая принимает строку и возвращает true или false, указывая на то, сбалансированы ли фигурные скобки, находящиеся в строке.

isBalanced('}{')                      // false
isBalanced('{{}')                     // false
isBalanced('{}{}')                    // true
isBalanced('foo { bar { baz } boo }') // true
isBalanced('foo { bar { baz }')       // false
isBalanced('foo { bar } }')           // false

▍Задания средней сложности

Реализуйте функцию fib2(). Она похожа на функцию fib() из предыдущей группы заданий, но поддерживает числа вплоть до 50. Подсказка: используйте мемоизацию.

fib2(0)                               // 0
fib2(1)                               // 1
fib2(10)                              // 55
fib2(50)                              // 12586269025

Реализуйте функцию isBalanced2(). Она похожа на функцию isBalanced() из предыдущей группы заданий, но поддерживает три типа скобок: фигурные {}, квадратные [], и круглые (). При передаче функции строки, в которой имеются неправильные скобочные последовательности, функция должна возвращать false.

isBalanced2('(foo { bar (baz) [boo] })') // true
isBalanced2('foo { bar { baz }')         // false
isBalanced2('foo { (bar [baz] } )')      // false

Реализуйте функцию uniq(), которая принимает массив чисел и возвращает уникальные числа, найденные в нём. Может ли функция решить эту задачу за время O(N)?

uniq([])                              // []
uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]

Реализуйте функцию intersection(), которая принимает два массива и возвращает их пересечение. Можете ли вы добиться того, чтобы функция решала эту задачу за время O(M+N), где M и N — длины массивов?

intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
intersection([1, 5, 4, 2], [7, 12])             // []

Создайте реализацию функции sort(), которая сортирует числовой массив за время O(N×log(N)).

sort([])                              // []
sort([-4, 1, Infinity, 3, 3, 0])      // [-4, 0, 1, 3, 3, Infinity]

Реализуйте функцию includes(), которая возвращает true или false в зависимости от того, встречается ли переданное ей число в переданном ей отсортированном массиве. Может ли функция решить эту задачу за время O(log(N))?

includes([1, 3, 8, 10], 8)            // true
includes([1, 3, 8, 8, 15], 15)        // true
includes([1, 3, 8, 10, 15], 9)        // false

Реализуйте функцию assignDeep(), которая похожа на Object.assign(), но выполняет глубокое объединение объектов. Для того, чтобы не усложнять задачу, можно исходить из допущения, что объекты могут содержать только числа и другие объекты (в них не может быть массивов, строк, и так далее).

assignDeep({ a: 1 }, {})              // { a: 1 }
assignDeep({ a: 1 }, { a: 2 })        // { a: 2 }
assignDeep({ a: 1 }, { a: { b: 2 } }) // { a: { b: 2 } }
assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 })
// { a: { b: { c: 1, d: 2 }}, e: 3 }

Реализуйте функцию reduceAsync(), которая похожа на функцию reduce() из группы простых заданий, но работает с функциями, возвращающими promise-объекты, каждый из которых должен быть разрешён до перехода к следующему.

let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))
await reduceAsync([a, b, c], (acc, value) => [...acc, value], [])
// ['a', 'b', 'c']
await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
// ['d', 'a', 'c', 'b']

Реализуйте функцию seq(), пользуясь тем же подходом, что и при работе над функцией reduceAsync(). Эта функция должна принимать массив функций, которые возвращают promise-объекты, и разрешать их один за другим.

let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => Promise.resolve('c')
await seq([a, b, c])                  // ['a', 'b', 'c']
await seq([a, c, b])                  // ['a', 'c', 'b']

▍Сложные задания

Некоторые задания из этой группы связаны с созданием структур данных. Не нужно запоминать все тонкости их функционирования, достаточно понимания их устройство, при этом сведения о предоставляемом ими интерфейсе можно найти в интернете. Далее, нужно знать, для чего эти структуры данных используются, каковы их ограничения в сравнении с другими структурами данных.

Реализуйте функцию permute(), которая возвращает массив строк, содержащий все пермутации заданной строки.

permute('')             // []
permute('abc')          // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

Создайте самостоятельную реализацию функции debounce().

let a = () => console.log('foo')
let b = debounce(a, 100)
b()
b()
b() // только этот вызов должен вызывать a()

Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().

class LinkedList {...}
let list = new LinkedList(1, 2, 3)
list.add(4)                           // undefined
list.add(5)                           // undefined
list.has(1)                           // true
list.has(4)                           // true
list.has(6)                           // false

Реализуйте класс HashMap, не используя встроенные объекты JavaScript ( {} ) или функцию map(). Вам дана функция hash(), которая принимает строку и возвращает некое число. Эти числа, в основном, уникальны, но возможна и ситуация, когда двум разным строкам соответствуют одинаковые числа.

function hash (string) {
  return string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}

Ваша реализация HashMap должна поддерживать лишь 2 метода: get() и set().

let map = new HashMap
map.set('abc', 123)                   // undefined
map.set('foo', 'bar')                 // undefined
map.set('foo', 'baz')                 // undefined
map.get('abc')                        // 123
map.get('foo')                        // 'baz'
map.get('def')                        // undefined

Реализуйте класс BinarySearchTree. Он должен поддерживать 4 метода: add(), has(), remove(), и size().

let tree = new BinarySearchTree
tree.add(1, 2, 3, 4)
tree.add(5)
tree.has(2)                           // true
tree.has(5)                           // true
tree.remove(3)                        // undefined
tree.size()                           // 4

Реализуйте класс BinaryTree, который поддерживает поиск в ширину, а также функции симметричного, прямого и обратного поиска в глубину.

let tree = new BinaryTree
let fn = value => console.log(value)
tree.add(1, 2, 3, 4)
tree.bfs(fn)                          // undefined
tree.inorder(fn)                      // undefined
tree.preorder(fn)                     // undefined
tree.postorder(fn)                    // undefined

Отладка

При ответе на следующие вопросы сначала постарайтесь понять, почему представленный код не работает. Объясните причину ошибки. Затем предложите пару вариантов исправления проблемы и перепишите код, реализуя один из предложенных вариантов. В итоге программа должна работать правильно.

Необходимо, чтобы этот код выводил в лог hey amy, но он выводит hey arnold. Почему?

function greet(person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
greet({ name: 'amy' })

Необходимо, чтобы этот код выводил в лог числа 0, 1, 2, 3 в указанном порядке, но он этого не делает (Однажды вы столкнётесь с этой ошибкой. Некоторые люди любят задавать этот вопрос на собеседованиях).

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}

Необходимо, чтобы этот код выводил в лог doggo, но он выводит лишь undefined.

let dog = {
  name: 'doggo',
  sayName() {
    console.log(this.name)
  }
}
let sayName = dog.sayName
sayName()

Попытка вызова метода bark() объекта Dog вызывает ошибку. Почему?

function Dog(name) {
  this.name = name
}
Dog.bark = function() {
  console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()

Почему функция isBig() возвращает именно такой результат?

function isBig(thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false
  }
  return true
}
isBig(1)    // false
isBig([2])  // false
isBig([3])  // true
