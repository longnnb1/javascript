// Strict mode for scripts
'use strict';
var v = "Hi! I'm a strict mode script!";

// Strict mode for functions
function strict() {
    // Function-level strict mode syntax
    'use strict';
    function nested() { return 'And so am I!'; }
    return "Hi!  I'm a strict mode function!  " + nested();
}

function notStrict() { return "I'm not strict."; }

// Strict mode for modules
function strict() {
    // because this is a module, I'm strict by default
}
export default strict;

// errors in strict mode
'use strict';
                        // Assuming no global variable mistypedVariable exists
mistypeVariable = 17;   // this line throws a ReferenceError due to the 
                        // misspelling of variable

// check more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode