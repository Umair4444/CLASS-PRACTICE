let my_value: number = 10;

if (my_value > 10 && my_value <= 50) {
  console.log("bad luck");
}

let email: string = "umair@gmail.com";
let password: number = 12345;

if (email == "umair@gmail.com" && password == 12345) {
  console.log("You are welcome");
} else if (email == "umair@gmail.com" || password == 12345) {
  console.log("one of the enter data is wrong, Please check");
} else {
  console.log("Please enter correct information");
}
