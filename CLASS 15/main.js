// type tuple = [string, number, number];
// const add: tuple = ["add", 1, 2];
// add.push(3);
// add.push(3);
// add.unshift(true);
// console.log(add);
// function restpara(color: string, ...args: string[]) {
//   console.log(color);
//   console.log(...args);
// }
// restpara("blue", "black", "green", "white");
// STRUCTURAL TYPING
// Oject ka Structure
// object ki properties aur data types same hona chaiye
// interface Ball {
//   diameter: number;
// }
// interface Sphere {
//   diameter: number;
//   radius: number;
// }
// let ball: Ball = {
//   diameter: 10,
// };
// let sphere: Sphere = {
//   diameter: 20,
//   radius: 5,
// };
// // LHS = RHS
// //LHS should have minimum those property that are in RHS
// // LHS CAN HAVE LESS PROPERTIES
// ball = sphere; // Ok
// // RHS can have more property than required in
// // RHS CAN HAVE MORE PROPERTIES
// sphere = ball; // Error
// // Creating Object
// let person = {
//   id: 1,
//   name: "Umair",
// };
// // Error
// //  person = {
// //   id: 6,
// //   fullname: "Umair",
// // };
// //OK
// person = {
//   id: 6,
//   name: "Umair",
// };
// INDEX SIGNATURE
// Syntax [var_name : data_type] : data_type
// assign new name to key Value
// when you don't know which properties will appear in objects
// let obj: {
//   id: number;
//   [x: string]: any; // index signature
// } = {
//   id: 1,
//   fullname: "Umair",
// };
// obj = {
//   id: 2,
//   nickname: "Tiger",
//   Isalive: true,
//   greet: () => "hello",
//   object: {},
// };
// console.log(obj);
// Stale Objects
// 'when you are comparing already created objects'
// No Strict Checking
// 'Fresh Objects 'when you are creating fresh objects'
// Strict Checking
// ASYNCHRONOUS PROGRAMMING AND SYNCHRONOUS PROGRAMMING
// SYNC -- LINE BY LINE AND COLUMN BY COLUMN PROGRAMMING
// ASYNC -- PERFORM TIME IN PERFORMING
// JAVASCRIPT IS INTERPRETED LANGUAGE -- PERFORM TASK WITHOUT WAITING -- SINGLE THREAD LANGUAGE
// CALL STACK --- SYNC Code goes to Call Stack Directly
// CALLLBACK QUE
// CallBack Function
// function One(callback: () => void) {
//   console.log("One");
//   callback();
// }
// // this is callback function
// function Two() {
//   console.log("Two");
// }
// //main function (function that I am calling as second)
// One(Two);
// console.log("Starting ......");
// // Settimeout as Async Func
// let delay = () => {
//   console.log("After 3 Seconds");
// };
// setTimeout(delay, 3000);
// let syncfunction = () => {
//   console.log("ended!");
// };
// syncfunction();
// setInterval(()=>console.log("hello"), 2000);
// let abc = setInterval(() => {
//   console.log("hello") ;
// }, 2000);
// Call BAck Hell
// when there is too much function nesting
// PROMISE
// Pending ----- Resolve --- Rejected
// if resolve .then
//if reject .catch
// function Myfunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("I am resolved"); // will take this value in .then parameter i.e result in .then
//     }, 2000);
//   });
// }
// Myfunc()
//   .then((result) => {
//     console.log(result,"REsolved");
//   })
//   .catch((err) => {
//     console.log("Rejected",err);
//   });
let isvictory = true;
const cricket = () => {
    isvictory = false;
    return new Promise((res, rej) => {
        if (isvictory) {
            setTimeout(() => {
                res("You won");
            }, 2000);
        }
        else {
            setTimeout(() => {
                rej("You Lost");
            }, 2000);
        }
    });
};
cricket()
    .then((result) => {
    console.log(result, ",'Jeet Mubarak Ho'");
})
    .catch((error) => {
    console.log(error);
});
export {};
