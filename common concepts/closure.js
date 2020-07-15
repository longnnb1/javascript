/*
A closure is the combination of a function and the lexical environment within which that function was declared
This environment consists of any local variables that were in-scope at the time the closure was created.
*/

function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc(); //log 'Mozilla'

/* ############################################### */

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

/*
In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.

add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.
*/

/* ############################################### */

function getUserId(){
    var id = 50
    return {
        getId: function(){
            return 'id: ' + id
        },
        setId: function(newId){
            id = newId
            return 'id: ' + id
        }
    }
}

var userId = getUserId()

console.log(userId)

console.log(userId.getId())

userId.setId(100)

console.log(userId.getId())