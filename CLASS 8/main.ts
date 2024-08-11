function greetings() {
  // declare
  console.log("Hello World from Umair using functions");
}

// calling
greetings();

// declaring function using parameter
function welcome(user_name: string, age: number) {
  console.log(`Hello ${user_name} and my age is ${age}`);
}

// paramaeter and arguments should be declare in same sequence
// calling function using parameter
// welcome("Umair", 20); // arguments
// welcome("Ali", 5); // arguments
// welcome("Khan", 5); // arguments
// welcome("Khalid", 31); // arguments

let user_name = ["Umair","Ali","Fahad"]
function info (user_name: string, age: number) {
    console.log(`Hello ${user_name} and my age is ${age}`);
  }

  info(user_name[1],20)

  function sum (number1: number, number2 : number){
    console.log(`sum of ${number1} + ${number2} => ${number1 + number2}`)
  }

  sum(4,6)