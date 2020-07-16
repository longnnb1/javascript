/* 
Template Literals 
Template literals are a new way of defining strings by using backticks ` instead of single or double quotes.
*/

const string = `This is a template literal`

const first_name = 'Long'
console.log(`Hello ${first_name}`) // Hello Long

// code between ${} will be executed as js code
const a = 2
const b = 3
console.log(`${a} + ${b} = ${a + b}`)
// 2 + 3 = 5

console.log(`This is
a multiline
string.`)
/*
This is
a multiline
string
*/

// watch out whitespace
console.log(`This is
             a multiline
             string with extra space.`)
/*
This is
             a multiline
             string
*/

// escape sequences
console.log(`First line\nSecond line\t\t\tafter tabs`)
/*
First line
Second line     after tabs
*/