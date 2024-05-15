// let fruitsArray = ["Apple", "Banana", "Mango", "Orange", "Kiwi"];
// console.log(fruitsArray);
export {};
// console.log(fruitsArray[0]);
// console.log(fruitsArray[1]);
// console.log(fruitsArray[2]);
// console.log(fruitsArray[3]);
// console.log(fruitsArray[4]);
// console.log(fruitsArray[444]); // return undefine if index value is not define or present in array
// // updating arrray
// console.log((fruitsArray[0] = "Watermelon")); // now apple is watermelon
// console.log(fruitsArray); // now array is updated
// // using pop method pop()
// let remove1 = fruitsArray.pop(); // remove last element
// let remove2 = fruitsArray.pop(); // remove last element
// console.log(remove1); // removes last element i.e kiwi
// console.log(remove2); // removes last element i.e orange
// console.log(fruitsArray); // now last element will be remove and new array will be this array
// // push method
// let add1 = fruitsArray.push("grapes", "Tomato"); // adds element to last
// let add2 = fruitsArray.push("Pear"); // adds element to last
// console.log(add1);
// console.log(add2);
// console.log(fruitsArray);
// // using shift method pop()
// let remove3 = fruitsArray.shift(); // remove last element
// let remove4 = fruitsArray.shift(); // remove last element
// console.log(remove1); // removes last element i.e Watermelon
// console.log(remove2); // removes last element i.e Banana
// console.log(fruitsArray); // now last element will be remove and new array will be this array
// // unshift method
// let add3 = fruitsArray.unshift("Melon"); // adds element to start
// let add4 = fruitsArray.unshift("Guava"); // adds element to start
// console.log(add1);
// console.log(add2);
// console.log(fruitsArray);
// HINT
// // Define an array
// let myArray: number[] = [];
// // Push an element into the array
// myArray.push(10);
// // Store the pushed element into a variable
// let pushedElement: number = myArray[myArray.length - 1];
// console.log(pushedElement); // Output: 10
// // SLICE METHOD slice() return new array
// // first argument is included i.e=> 1 and second argument is excluded i.e => 3
// let slicedArray = fruitsArray.slice(1, 3);
// console.log(slicedArray);
// let slicedArray2 = fruitsArray.slice(0); // include all elements
// console.log(slicedArray2);
// let slicedArray3 = fruitsArray.slice(-3, -1); // can also work on negative value start from lowest to highest
// console.log(slicedArray3);
// SPLICE METHOD // change in the orignal array
// adds or delete element in a array
// first arg is start, second arg is for delete if 0 no element will be deleted
// let splicedArray = fruitsArray.splice(0, 2);
// console.log(splicedArray);
// console.log(fruitsArray);
// let splicedArray2 = fruitsArray.splice(0, 0, "peach", "dragonfruit"); // from start and delete 0 element and adds peach and dragonfruit
// console.log(splicedArray2);
// console.log(fruitsArray);
// let splicedArray3 = fruitsArray.splice(0, 2, "peach", "dragonfruit"); // from start and delete 2 element and adds peach and dragonfruit
// console.log(splicedArray3);
// console.log(fruitsArray);
// let splicedArray4 = fruitsArray.splice(3, 0, "peach", "dragonfruit"); //from 3rd index and delete 0 element and adds peach and dragonfruit
// console.log(splicedArray4);
// console.log(fruitsArray);
//                          --------------------OBJECTS------------------------------
// use when you need well structured data
// can use key-value pair // for property and methods functionality // for different data types
// let myCar = {
//   brand: "Ferrari",
//   driver: "Enzo Ferrari",
//   model: 2024,
//   isAvailable: true,
//   start: () => {
//     return "I am igniting my Engine";
//   },
//   maxSpeed: () => {
//     return "Maximum speed is 300km/s";
//   },
//     isconvertable  : () => {
//         return true
//     }
// };
// // console.log(myCar);
// // console.log(myCar.brand); // objectname.property will be printed
// // console.log(myCar.isAvailable); // objectname.property will be printed
// // console.log(myCar.model); // objectname.property will be printed
// // // update the property
// // myCar.isAvailable = false;
// // console.log(myCar.isAvailable);
// console.log(myCar.start());
// console.log(myCar.maxSpeed());
// console.log(myCar.isconvertable())
// let myinfo = {
//   name: "Umair Ali Khan",
//   email: "name@gmail.com",
//   rollNO: 13443,
//   campus: "Governor House",
// };
// console.log(myinfo.email);
// //                     -------------------------Using Objects In A Array----------------------
// let students = [
//   {
//     name: "Umair Ali Khan",
//     email: "name@gmail.com",
//     rollNO: 13443,
//     campus: "Governor House",
//   },
//   {
//     name: "Azhar Ali Khan",
//     email: "naam@gmail.com",
//     rollNO: 454573,
//     campus: "Online",
//   },
//   {
//     name: "Unknown",
//     email: "Unknown@gmail.com",
//     rollNO: 111111,
//     campus: "Terminated",
//   },
// ];
// console.log(students);
// console.log(students[0].rollNO);
// console.log(students[0].email);
// // After Udating Value Manually
// console.log((students[0].rollNO = 222222));
// console.log((students[0].email = "Private@gmail.com"));
// console.log(students);
//          ----------------------------- TYPE ALIAS ---------------------
// YOU CAN NICKNAME OR ASSIGN NAME TO A DATA TYPE
// makes code readable and maintainable
// Improve Readibility through typescript
// to determine value as well with type
// type mynames = string;
// type age = number;
// let irfan1: mynames = "Pappu";
// let irfan2: age = 24;
// console.log(irfan1);
// console.log(irfan2);
// type students = string;
// type teacher = string;
// let me: students = "Umair";
// let myteacher: teacher = "Ali";
// console.log(me);
// console.log(myteacher);
