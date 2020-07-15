// false = null, undefined, NaN, '', 0

// + : cast to number
var n = '2'
console.log(n + 1) // '21'
console.log(+n + 1) // 3

// set default value: ||
name = name || 'default name'

// debug
debugger;

// Remember, that in JSON, the only allowed quote character is the double quotes.
var jsonStr = '{"in_json": "you_use_only_double_quotes"}'

// use *this* in inner functions
var self = this

// sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function downloadPicture(url, onSuccess) {
    console.log('start downloading picture')
    await sleep(3000)
    console.log('finish downloading picture')
    onSuccess()
}

// check object type
var s = new String('longnnb')
console.log(s instanceof String)