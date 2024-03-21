let a: number = 5;
let b: number = 1;

console.log(a);
console.log(a++);
console.log(a);

console.log(b);
console.log(b);

console.log(++b);
console.log(b++);
console.log(b);

console.log("______________________________________________");

let j : number = 1;
let k = 5;

let L = ++j + j++ + --k + k-- + j + k;
    //curent    //2 + 2    +4   +4    +3  +3 = 18
//updated to    //2  +3    +4   +3    +3   +3 

console.log(L);
