// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object. (the default binding for this)
// In a function, in strict mode, this is undefined. (strict mode does not allow default binding)
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.

// Implicit Binding
// this refer to the object that called the function
function welcome() {
    console.log('Welcome', this.firstName)
}

var person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5566,
    fullName() {
        return this.firstName + ' ' + this.lastName
    },
    welcome: welcome
};

console.log(person.fullName())

// context (call-site): person
person.welcome()

// context: global
welcome()

// Implicit lost
var hi = person.welcome
var firstName = 'Jane'

hi() // output: 'Welcome Jane' (test in browser)

//binding
function hello(age, address) {
    console.log('Hello', this.firstName)
    console.log('Age: ' + age + ' Address: ' + address)
}

hello.call(person, 20, 'Tokyo')
hello.apply(person, [21, 'Osaka'])

var sayHello = hello.bind(person)
sayHello(22, 'Nagoya')

// Note: assign call or apply to a variable will assign the return value of the functions

