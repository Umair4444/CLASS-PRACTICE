// // can import seperately and combinely
// import { Oil, sum } from "./export.js";
// // import { Oil } from "./export.js";
import sum from "./export.js";
// console.log(Oil);
let res = sum(10, 11);
console.log(res);
import dh, { a, b, c, d } from "./export.js";
// import dh from "./export.js";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(dh(1, 4));
