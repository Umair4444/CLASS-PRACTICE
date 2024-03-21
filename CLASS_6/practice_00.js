"use strict";
let my_value = 10;
if (my_value > 10 && my_value <= 50) {
    console.log("bad luck");
}
let email = "umair@gmail.com";
let password = 12345;
if (email == "umair@gmail.com" && password == 12345) {
    console.log("You are welcome");
}
else if (email == "umair@gmail.com" || password == 12345) {
    console.log("one of the enter data is wrong, Please check");
}
else {
    console.log("Please enter correct information");
}
