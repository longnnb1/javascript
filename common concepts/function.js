// Funtion declaration
// Ok with hoisting
myFunc(); // ok
function myFunc() {
    console.log('Function is running')
}

// Function expression
// Not ok with hoisting
// myFuncVar(); // error, function variable was declared but was not initialized
var myFuncVar = function () {
    console.log('Function is running')
}
myFuncVar(); // ok

// arguments
function sayHi(names) {
    console.log('Arguments:', arguments)
    console.log('Argument 1:', arguments[1])
    console.log('Arguments length:', arguments.length)
    console.log('Type:', typeof arguments)
}

var user = {
    firstName: 'Bill',
    lastName: 'Gates'
}

sayHi('Jone', 'Jane', 'Jack', 15, user)

// default arguments
function pay(total, tips = 0, tax = 0) {
    // tips = tips || 0;
    return total + tips + tax
}

// IIFE: An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// Note: call IIFE like this need a function declaration right before it or it will throw error
(function (name) {
    console.log('Hello', name)
})('John')

// Assigning the IIFE to a variable stores the function's return value, not the function definition itself.
var hello = function (name) {
    console.log('Hello', name)
    return name + ' from IIFE'
}('Jane')

console.log(hello)


// call vs apply
// someFunc.call(thisArg, 1, 2, 3)
// someFunc.apply(thisArg, [1, 2, 3])
var someFunc = function () {
    return this.length
}
console.log(someFunc.apply([1, 2, 3])) // 3
console.log(someFunc.call([1, 2, 3])) // 3
// each invocation is the equivalent of
// [1, 2, 3].someFunc(); // 3

// Function.prototype.call()
// The method Call invokes the function and allows you to pass in arguments one by one using commas.
let customer1 = { name: 'Leo', email: 'leo@gmail.com' };
let customer2 = { name: 'Nat', email: 'nat@hotmail.com' };

function greeting(text) {
    console.log(`${text} ${this.name}`);
}

greeting.call(customer1, 'Hello'); // Hello Leo
greeting.call(customer2, 'Hello'); // Hello Nat

// Function.prototype.apply()
// The method Apply invokes the function and allows you to pass in arguments as an array.
let customer1 = { name: 'Leo', email: 'leo@gmail.com' };
let customer2 = { name: 'Nat', email: 'nat@hotmail.com' };
function greeting(text, text2) {
    console.log(`${text} ${this.name}, ${text2}`);
}
greeting.apply(customer1, ['Hello', 'How are you?']); // output Hello Leo, How are you?
greeting.apply(customer2, ['Hello', 'How are you?']); // output Hello Natm How are you?

// Function.prototype.bind()
// The Bind method returns a new function, allowing you to pass in a this array and any number of arguments. 
let customer1 = { name: 'Leo', email: 'leo@gmail.com' };
let customer2 = { name: 'Nat', email: 'nat@hotmail.com' };
function greeting(text) {
    console.log(`${text} ${this.name}`);
}
let helloLeo = greeting.bind(customer1);
let helloNat = greeting.bind(customer2);
helloLeo('Hello'); // Hello Leo
helloNat('Hello'); // Hello Nat

// The Bind implementation would be like this:
Function.prototype.bind = function (context) {
    var fn = this;
    return function () {
        fn.apply(context, arguments);
    };
};
