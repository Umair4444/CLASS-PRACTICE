"use strict";
//pre and post increment and decrement
let a = 0;
let b = 1;
console.log(a++);
console.log(a);
console.log(--b);
console.log(b);
console.log(10 == 10); // equal to
console.log(10 !== 10); // not equal to
console.log(10 > 10); // greater than
console.log(10 < 10); // less than
console.log(5 == 5 && 4 > 2);
console.log(5 == 5 || 4 > 2);
console.log(5 == 5 || 4 > 20);
console.log(5 == 5 && 4 > 20);
console.log("compasision operator of not equal");
console.log(5 != 5);
console.log(5 !== 5);
// ignore error
//@ts-ignore
console.log(5 == "5");
//@ts-ignore
console.log(5 === "5");
// logical operator // return true if both are true and false if any one is false
console.log("logical operator && ");
console.log(5 > 2 && 2 < 4);
console.log(5 > 2 && 20 < 4);
// logical operator // return true if any one is true and false if both are false
console.log("logical operator || ");
console.log(5 > 2 || 2 < 4);
console.log(5 > 24 || 20 < 4);
// logical not operator
console.log("not operator");
console.log(!0); // reverse false to true
console.log(!1); // reverse true to false
// if else statement
console.log("logical if-else statement");
let raining = true;
if (raining) {
    console.log("wear a suncoat");
}
else {
    console.log("don't wear a coat");
}
// if else if statement
console.log("if-else if statement ");
let weather = "foggy";
if (weather == "raining") {
    console.log("Wear raincoat");
}
else if (weather == "foggy") {
    console.log("Wear Mask");
}
else {
    console.log("Do As You Like");
}
// conditional Ternary Operator
let issleeping = true;
let amir = issleeping ? "Sleeping" : "he is alert";
console.log(amir);
// ASCII A-Z IS 65-90
// ASCII a-z IS 97-122
// ASCII 0-9 IS 48-57
console.log("checking string comparision");
console.log("ali" > "ALI"); // a is greater than A
console.log("ali" < "ALI"); // A is less than a
console.log(true == 1); // true b/c true is equal to 1
console.log(true === 1); // false
