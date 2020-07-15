// var: function scope
// can be declared multiple times
var id = 123
var id = '123'

// let: block scope
let address = 'HCM'
address = 'HN'

// const
const street = 35
// street = 45 // error

// use *let* instead of *var* in for loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}