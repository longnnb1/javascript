// extend default object
Number.prototype.square = function(){
    return this*this
}

Number.prototype.cube = function(){
    return this*this*this
}

var n = 2
console.log(n.square())
console.log(n.cube())