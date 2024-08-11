// enum trafficLight {
//     red = "Red",
//     green = "Green",
//     yellow = "Yellow"
// }
// console.log(trafficLight["red"])
// const gender = ["Male","Female",101]
// console.log(gender)
// type Records = [number,string,boolean]
// let Circus : Records = [20,"lion",true]
// console.log(Circus)
//  enum prices {
//     petrol ,
//     diesel ,
//     lpg
// }
// console.log(prices[0])
// const enum Timeslot {
//     morning = "9-12",
//     afternoon = "2-5",
//     evening = "7-10"
// }
// console.log(Timeslot.afternoon)
// const enum Menu {
//   BihariKababb = "Rs 200",
//   Biryani = "Rs 300",
//   Nihari = "Rs 300",
// }
// console.log(Menu["BihariKababb"]);
// console.log(Menu.Biryani);
// REST PARAMETER
// for unknown number of argument
// example for sending whatsapp images and emails attachment
// console.log is a rest parameter function
// function wallet(color: string, ...args: string[]) {
//   console.log(color);
//   console.log(args);
// }
// wallet("blue", "currency", "Nic", "Atm Cards", "Buss.. Card"); // sending unknown number of args to func parameter
// function fileUpload(type: string, ...files: string[]) {
//   console.log(type);
//   //   for(let file of files){
//   //       console.log(file);
//   //   }
//   //   files.forEach((file) => {
//   //     console.log(file);
//   //   });
//   // use join and tolocalestring
//   console.log(type, files);
// }
// fileUpload("Images", "Car Image", "Street Image", "Park Image");
// OPTIONAL PARAMETERS
// can be done with function interface objects
// function form(name: string, feedback?: string) {
//   console.log(name);
//   console.log(feedback);
// }
// form("Umair");
// form("Umair", "Good Class");
// INTERFACE - defining object structure
// always use semicolon in interface
// interface Product {
//   prodName: string;
//   price?: string;
// }
// let prod: Product = {
//   prodName: "ice",
// };
// console.log(prod);
//Narrowing
// to know the what actually is the data type
let age;
age = "twenty-two";
console.log(typeof age);
age = 33;
console.log(typeof age);
if (typeof age === "number") {
    console.log("I am a Number");
    console.log(age.toFixed(2));
}
else if (typeof age === "string") {
    console.log("I am a String");
    console.log(age.length);
}
export {};
// TYPE => ANY
// will accept any data type
// let val: any;
// val = 30;
// val = "hello";
// val = [];
// val = {};
// val = () => "true";
// // TYPE => UNKNOWN
// // it is good to use unknown when data type is not clear
// // use unknown istead of any
// let value: unknown;
// value = 30;
// value = "hello";
// value = [];
// value = {};
// value = () => "true";
// let val: unknown;
// let value1: unknown = val; //ok
// let value2: any = val; //ok
// // let value3: string = val; // error
// // let value4: number = val; // error
// Never
// // Function returning never must not have a reachable end point
// function error(message: string): never {
//   throw new Error(message);
// }
// // Inferred return type is never
// function fail() {
//   return error("Something failed");
// }
// // Function returning never must not have a reachable end point
// function infiniteLoop(): never {
//   while (true) {}
// }
// MODULES
// for reusable, maintainable, readability
// EXPLICT CASTING
// to cast or declare data type intentionally or forcefully
// let value: unknown = "Ali";
// // console.log(typeof value);
// let lowerCase = (value as string).toLowerCase();
// console.log(lowerCase);
// // console.log((value as string).toUpperCase());
// // console.log(typeof value);
// let num: unknown = 20;
// let mathAround = (num as number).toFixed(3);
// console.log(mathAround);
