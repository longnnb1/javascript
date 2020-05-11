// A guard clause is simply a single piece of conditional logic at the beginning of a function which will return from the function early if a certain condition is met.

// original function
function startTimer(timer) {
    if (timer.enabled) {
        timer.time = 0
        timer.start()
    }
}

// use guard clause
function startTimer(timer) {
    if (!timer.enabled) return

    timer.time = 0
    timer.start()
}

// original function
function getInsuranceDeductible(insurance) {
    if (insurance.covered) {
        if (insurance.majorRepair) {
            return 500
        } else if (insurance.mediumRepair) {
            return 300
        } else {
            return 100
        }
    } else {
        return 0
    }
}

// use guard clause
function getInsuranceDeductible(insurance) {
    if (!insurance.covered) return 0
    if (insurance.majorRepair) return 500
    if (insurance.mediumRepair) return 300

    return 100
}