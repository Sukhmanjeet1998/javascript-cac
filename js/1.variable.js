
const accountID = 144553;
let accountEmail = "hello@abc.com";
var accountPassword = "12345";
let accountCity = "Jaipur";
let accountState;

// accountID = 35555;   // Can't change valus of constant varaibles
console.log(accountID);

{
    const accountID = 553;
    console.log(accountID);
}

console.log(accountID);

accountEmail = "sir@def.com";
accountPassword = 67890;
accountCity = "Bakhrota";

console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);

// let is block scope variable
// var is global scope variable

/*
................................var:

var was the original way to declare variables in JavaScript.
Variables declared with var have function-level scope. They are either global or function scoped.
If a var declaration appears within a function, it is accessible throughout the entire function, regardless of the block it's defined in.
Variables declared with var are hoisted to the top of their function or global scope.
var allows variable re-declaration and re-assignment.
Example:
var x = 10;
console.log(x); // Output: 10
{
    var x = 20;
}
console.log(x); // Output: 20

.................................let:

let was introduced in ECMAScript 2015 (ES6) and provides block-level scoping.
Variables declared with let have block scope, meaning they are only accessible within the block they are defined in (including loops, if statements, etc.).
let variables are not hoisted to the top of their block.
let allows re-assignment but not re-declaration within the same scope.

let y = 10;
console.log(y); // Output: 10
{
    let y = 20;
    console.log(y); // Output: 20
}
console.log(y); // Output: 10

.................................const:

const was also introduced in ECMAScript 2015 (ES6) and is used to declare constants.
Constants declared with const must be assigned a value when declared and cannot be re-assigned.
const variables also have block scope.
Like let, const variables are not hoisted.
Constants are usually written in uppercase letters by convention.

const z = 10;
console.log(z); // Output: 10
// z = 20; // This would throw an error because z is a constant and cannot be reassigned
In general, it's recommended to use const by default for variables that don't need to be reassigned, and use let when you know the variable's value will change. Avoid using var in modern JavaScript development due to its function-level scoping and hoisting behavior, which can lead to unexpected results and difficult-to-debug code.

*/

