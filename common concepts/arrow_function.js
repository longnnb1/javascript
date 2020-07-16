var hello = name => console.log('Hi ' + name)
hello('Long')

var numbers = [1, 2, 3, 13, 12, 31, 31, 2312]
numbers.forEach(i => console.log(i))

// *this* in arrow function refer to global object
// Be careful when using arrow functions with this
var user = {
  firstname: 'Long',
  showName: function(){
    console.log(this)
  },
  logName: () => {
    console.log(this)
  }

}
user.showName()
user.logName()
