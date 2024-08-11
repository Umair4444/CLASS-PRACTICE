// // // callback and Callback hell
export {};
// function getData(id: number, nextid?: () => void) {
//   console.log("Data Fetching");
//   setTimeout(() => {
//     console.log("current id is", id);
//     if (nextid) {
//       nextid();
//     }
//   }, 2000);
// }
// // // Data fetching with second parameter as optional
// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });
// // Data fetching with both parameter as required
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       console.log("All data Fetched");
//     });
//   });
// });
// // Promise Example
// let isFoodReady = true;
// let Cooking = () => {
//   // put it in settimeout
//   return new Promise((resolve, reject) => {
//     console.log("Food is cooking");
//     setTimeout(() => {
//       if (isFoodReady) {
//         resolve("Dineer is ready!");
//       } else {
//         reject("Dinner is not ready");
//       }
//     }, 3000);
//   });
// };
// // PROMISE CHAINING
// Cooking()
//   .then((res) => {
//     console.log("THEN=>", res);
//     return "i want biryani";
//   })
//   .then((res) => {
//     console.log(res);
//     return "now i want kher";
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("CATCH=>", err);
//     return "Gas Chali Gayi ha";
//   })
//   .then((res) => {
//     if (res) {
//       console.log(res);
//     }
//   })
//   .finally(() => {
//     console.log("We will have dinner no matter what!");
//   });
// // // TERNARY OPERATOR
// let teacherName = "Ali";
// let res = teacherName == "Ali" ? `Sir ${teacherName}` : "Miss XYZ";
// console.log(res);
// // OBJECT ORIENTED PROGRAMMING OOPs
// // It is paradiagm of programming and it is in every programming language
// // OOPs includes
// // class
// // Object
// // Inheritance
// // Encapsulation
// // Abstraction
// // Polymorphisim
// // Constructor
// // Class Properties
// // always use this with class properties when calling in constructor
// class Person {
//   //   name: string = "umair";
//   //   isStuding: boolean = true;
//   name: string;
//   isStuding: boolean;
//   constructor(n: string, s: boolean) {
//     this.name = n;
//     this.isStuding = s;
//   }
//   getDetails(food:string): string {
//     return `My name is ${this.name} and status of my studying is ${this.isStuding} and my fav food is ${food}`;
//   }
// }
// // Making an Object or instance of a Class
// // make new object of class Person
// // and also call constructor
// // Parameter are define at initializing fuction
// // Arguments are given by user when calling a function
// // new keyword creates new object
// const p1 = new Person("umair", true);
// const p2 = new Person("ali", false);
// const p3 = new Person("khan", true);
// console.log(p1);
// console.log(p2.getDetails("biryani"));
// console.log(p3);
// Object with functions
// let employee = {
//   name: "John",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     country: "USA",
//   },
//   onc: function() {
//     return "000"
//   },
// };
// console.log(employee.onc())
// console.log(employee.address);
// class Student {
//     name : string,
//     timing : string
//     constructor (n:string,t:string){
//         this.name = n,
//         this.timing = t
//     }
// }
// let s1 = new Student("Umair","2 to 5")
// console.log(s1)
