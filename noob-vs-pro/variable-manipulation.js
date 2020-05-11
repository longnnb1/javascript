//noob version
function calculateTotalN(items, options) {
    let t = 0
    items.forEach(i => {
        t += i.price * i.quan
    });
    t = t - t * (options.dis || 0)
    t = t * 1.1
    t = t + (options.ship || 5) // bug: 0 || 5 => 5
    return t
}

//advanced version
//use constants
const TAX_RATE = 1.1
const SHIPPING_DEFAULT = 5

//default options value
//meaningful variable name
function calculateTotalA(items, options = {}) {
    if (items == null || items.length == 0) return 0

    let total = 0
    items.forEach(item => {
        total += item.price * item.quantity
    });
    total = total - total * (options.discount || 0)
    total = total * TAX_RATE
    if (options.shipping != 0) {
        total = total + (options.shipping || SHIPPING_DEFAULT)
    }
    return total
}

//pro version
//array destructuring
function calculateTotalP(items, { shipping = SHIPPING_DEFAULT, discount = 0 } = {}) {
    if (items == null || items.length == 0) return 0

    const itemsCost = items.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)

    return itemsCost * (1 - discount) * TAX_RATE + options.shipping
}