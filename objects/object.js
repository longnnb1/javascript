// object literal
let user = {
    firstname: 'firstname',
    lastname: 'lastname',
    showName: function () {
        console.log(this.firstname + ' ' + this.lastname)
    }
}

// constructor
function User(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
    this.showName = function () {
        console.log(this.firstname + ' ' + this.lastname)
    }

}

let longnnb = new User('Long', 'Nguyen')
longnnb.showName()

// prototype
// prototype will create an individual function; when an instance calls the function, it calls the reference of that function => this will save memory instead of creating everything for each instance
User.prototype.sayHello = function(){
    console.log('Hello there! My name is ' + this.firstname)
}

let bill = new User('Bill', 'Gates')
bill.sayHello()

longnnb.sayHello()

// Object.create
let longnnb1 = Object.create(longnnb)
longnnb1.showName()

