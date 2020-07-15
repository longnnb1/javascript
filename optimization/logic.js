//noob version
function numberToAccountingN(n) {
    if (n < 0) {
        return "(" + Math.abs(n) + ")"
    } else if (n >= 0) {
        return n
    }
}

//advanced version
function numberToAccountingA(n) {
    if (n != null) {
        if (n < 0) {
            return `(${Math.abs(n)})`
        } else {
            return n.toString()
        }
    }
}

//pro version
function numberToAccountingP(n) {
    if (n == null) return //guard clauses //undefined == null is true
    if (n < 0) return `(${Math.abs(n)})`
    return n.toString()
}

//best version ?? 
function numberToAccountingB(n) {
    if (typeof n === "number")
        return n >= 0 ? n.toString() : `(${Math.abs(n)})`
}