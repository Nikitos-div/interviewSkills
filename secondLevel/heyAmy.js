// function greet(person) {
//     if (person == { name: 'amy' }) {
//         return 'hey amy'
//     } else {
//         return 'hey arnold'
//     }
// }
// greet({ name: 'amy' })

function greet(person) {
    if (person.name == 'amy') {
        return console.log('hey amy')
    } else {
        return console.log('hey arnold')
    }
}

greet({ name: 'amy' })
