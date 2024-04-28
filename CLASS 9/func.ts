function google_maps(from: string, to: string) {
  console.log(`I am going from ${from} to ${to}`);
}

google_maps("North Karachi", "Governor House");

function game(user: string = "PLAYERONE") {
  console.log(user);
}

game();
game("Umair");

function add(num1: number = 2, num2: number = 5) {
  return `${num1 + num2}`;
}

add(undefined, 10);

function multiply(num1: number, num2: number) {
  return `${num1 * num2}`;
}

console.log(multiply(2, 5));
// return ype is used to return you some value when a function runs
// variable is a container to store data
// function is used to store line of code
function division(num1: number, num2: number) {
  return `${num1 / num2}`;
}
function subtraction(num1: number, num2: number) {
  return `${num1 - num2}`;
}
console.log(add(2, 2)); // 4
console.log(subtraction(2, 2)); // 0
console.log(multiply(2, 2)); // 4
console.log(division(2, 2)); // 1

function info(name: string, course: string, status: boolean): string {
  return `${name} , ${course} , ${status}`;
}

console.log(info("Umair", "GIAIC", true));

// function returning array and destructing
let exe = function math_operation(a: number, b: number): number[] {
  let sum = a + b;
  let multiply = a * b;

  return [sum, multiply];
};

let roll = exe(2, 3);
console.log(roll);

let [summ, multi] = roll;

console.log(summ, "is sum");
console.log(multi, "is multi");
