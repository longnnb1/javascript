class User {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
    getName() {
        return this.firstname + ' ' + this.lastname
    }
}

var longnnb = new User('Long', 'Nguyen')
console.log(longnnb)
console.log(longnnb.getName())

class Student extends User {
    constructor(firstname, lastname, id) {
        super(firstname, lastname);
        this.id = id;
    }
    getId() {
        return this.id;
    }
}

var bill = new Student('Bill', 'Gates', 1)
console.log(bill)
console.log(bill.getName())
console.log(bill.getId())