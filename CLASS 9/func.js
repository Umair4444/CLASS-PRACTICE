// function google_maps(from: string, to: string) {
//   console.log(`I am going from ${from} to ${to}`);
// }
// google_maps("North Karachi", "Governor House");
// function game(user: string = "PLAYERONE") {
//   console.log(user);
// }
// game();
// game("Umair");
function add(num1, num2) {
    if (num1 === void 0) { num1 = 2; }
    if (num2 === void 0) { num2 = 5; }
    return "".concat(num1 + num2);
}
console.log(add(5)); //10
console.log(add(undefined, 10)); //12
function multiply(num1, num2) {
    return "".concat(num1 * num2);
}
console.log(multiply(2, 5)); //10
// return type is used to return you some value when a function runs
// variable is a container to store data
// function is used to store line of code
function division(num1, num2) {
    return "".concat(num1 / num2);
}
function subtraction(num1, num2) {
    return "".concat(num1 - num2);
}
console.log(add(2, 2)); // 4
console.log(subtraction(2, 2)); // 0
console.log(multiply(2, 2)); // 4
console.log(division(2, 2)); // 1
function info(name, course, status) {
    return "".concat(name, " , ").concat(course, " , ").concat(status);
}
console.log(info("Umair", "GIAIC", true));
// function returning array and destructing
var exe = function math_operation(a, b) {
    var sum = a + b;
    var multiply = a * b;
    return [sum, multiply];
};
var roll = exe(2, 3);
console.log(roll); //[5,6]
// let [summ, multi] = roll;
var multi = roll[0], summ = roll[1];
console.log(summ, "is sum");
console.log(multi, "is multi");
