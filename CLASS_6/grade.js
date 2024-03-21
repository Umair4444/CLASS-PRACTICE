"use strict";
let my_percentage = 123;
if (my_percentage == 100) {
    console.log("A++ Grade");
}
else if (my_percentage >= 80 && my_percentage < 90) {
    console.log("A+ Grade");
}
else if (my_percentage >= 70 && my_percentage < 80) {
    console.log("A Grade");
}
else if (my_percentage >= 60 && my_percentage < 70) {
    console.log("B Grade");
}
else if (my_percentage >= 50 && my_percentage < 60) {
    console.log("C Grade");
}
else if (my_percentage < 60) {
    console.log("FAIL");
}
else {
    console.log("Something is wrong");
}
