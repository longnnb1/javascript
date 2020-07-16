/* 
Tagged Template Literals 
Tagged template literals are simply the ability to run a function on the content of a template literal.
*/

// String.raw - escape sequences are not computed, printed as plain text
console.log(String.raw`This is all\non one line.`) // no parenthesis
// This is all\non one line.

// custom function
function custom() {
    return `Custom String`
}

console.log(custom`Template Literal String`)
// Custom String

// The first parameter to the function is an array of all the strings in the template literal separated by the ${} expressions.
function custom2(strings) {
    console.log(strings)
    // ["My name is", "and I love", ""]
}

const name = 'Long'
const hobby = 'playing guitar'
custom2`My name is ${name} and I love ${hobby}`

// The rest of the parameters to the function correspond with each of the ${} expressions in the order they appear in the template.
function custom3(strings, name, hobby) {
    console.log(name)
    // Long
    console.log(hobby)
    // playing guitar
}

custom3`My name is ${name} and I love ${hobby}`

// Many times you will not know how many ${} expressions a string will have, so you can use the rest operator to group all the ${} expressions into one array.
function custom4(strings, ...values) {
    console.log(values)
    // ["Long", "playing guitar"]
}

custom4`My name is ${name} and I love ${hobby}`

// With this syntax we now have all the information we need to reconstruct the string passed into the tagged template literal.
function custom5(strings, ...values) {
    return values.reduce((finalString, value, index) => {
        return `${finalString}${value}${strings[index + 1]}`
    }, strings[0])
}

console.log(custom5`My name is ${name} and I love ${hobby}`)
// My name is Long and I love playing guitar

// One thing we could do is bold all values from ${} expressions since we have access to each value inside the values array.

function bold(strings, ...values) {
    return values.reduce((finalString, value, index) => {
        return `${finalString}<b>${value}</b>${strings[index + 1]}`
    }, strings[0])
}

console.log(bold`My name is ${name} and I love ${hobby}`)
// My name is <b>Long</b> and I love <b>playing guitar</b>

// Removing Newlines From Multiline Strings
function oneLine(strings, ...values) {
    const string = values.reduce((finalString, value, index) => {
        return `${finalString}<b>${value}</b>${strings[index + 1]}`
    }, strings[0])

    return string.replace(/\s*\n\s*/g, ' ')
}

console.log(oneLine`This is a really long
  string that spans across multiple
  lines so it is easier to read.`)
// This is a really long string that spans across multiple lines so it is easier to read.


// Querying Elements With Tagged Template Literals
// Tagged template literals can be used to return things other than strings too. 
function queryAll(strings, ...values) {
    const string = values.reduce((finalString, value, index) => {
        return `${finalString}<b>${value}</b>${strings[index + 1]}`
    }, strings[0])

    return document.querySelectorAll(string)
}

queryAll`div`
  // This will return all divs on the page