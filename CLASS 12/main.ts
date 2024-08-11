// Type Alias
// we can use in string,number,boolean,array and object

// type StudentName = string;
// type Alien = string;

// let myName: StudentName = "Umair Ali Khan";
// console.log(myName);

// let alien: Alien = "Jadu";
// console.log(alien);

// type ManinCourse = string[];

// let maincourse: ManinCourse = ["Biryani", "Kabab", "Cold Drinks"];
// console.log(maincourse);

// type Info = {};

// let myinfo: Info = {
//   name: "Umair Ali Khan",
//   isstudent: true,
//   Location: "Governor House",
//   classSize: 29,
// };

// console.log(myinfo);

// type Boolranarray = boolean[];
// let boolArray: Boolranarray = [true, false, true, true];
// console.log(boolArray);

// // TYPE UNION
// allow multiple data types

// let mixedarray: (string | number)[] = ["Umair", 23, "Azhar", 20];
// console.log(mixedarray);

// let myRollNo1: string | number = 123;
// console.log(myRollNo1);
// myRollNo1 = "456";
// console.log(myRollNo1);

// let isPresent: string | boolean = "Present";
// console.log(isPresent);

// isPresent = true;
// console.log(isPresent);

// TYPE LITERALS
// Assign Value as a data types

// type Size = "Small" | "Medium" | "Large";

// let size:Size = 'Small'

//  size = "Small";
//  size = "Medium";
//  size = "Large";
// console.log(size);

// type TrafficLights = "Green" | "Red" | "Yellow";
// let trafficlights: TrafficLights = "Green";
// console.log(trafficlights);

// trafficlights = "Red";
// console.log(trafficlights);

// trafficlights = "Yellow";
// console.log(trafficlights);

// trafficlights = "Blue"; // wrong type because it is not define in TrafficLight

// Giving types to a Object

// let myCar: {
//   make: string;
//   driver: string;
//   model: number | string;
//   isConvertable: boolean;
//   isAc: () => boolean;
//   maxspeed: () => string;
// } = {
//   make: "Ferrari",
//   driver: "Enzo Ferrari",
//   model: 2023,
//   isConvertable: true,
//   isAc: () => true,
//   maxspeed: () => {
//     return "Maxspeed is 200 miles/s";
//   },
// };

// console.log(myCar.driver);
// console.log(myCar.isAc());
// console.log(myCar.maxspeed());
// // console.log(myCar["isConvertable"]);

// TYPE ALIAS USING TYPE OBJECT
// type Car = {
//   make: string;
//   driver: string;
//   model: number | string;
//   isConvertable: boolean;
//   isAc: () => boolean;
//   maxspeed: () => string;
//   color : string[]
// };

// let friendCar: Car = {
//   make: "Ferrari",
//   driver: "Enzo Ferrari",
//   model: 2023,
//   isConvertable: true,
//   isAc: () => true,
//   maxspeed: () => {
//     return "Maxspeed is 200 miles/s";
//   },
//   color : ["White","Black","Blue"]
// };

// console.log(friendCar);
// console.log(friendCar.isConvertable);
// console.log(friendCar.color[1])

// NESTED OBJECTS

// type Slip = {
//   customerName: string;
//   products: {
//     productName: string;
//     price: number;
//   };
// };

// let bill: Slip = {
//   customerName: "Umair",
//   products: {
//     productName: "Colddrink",
//     price: 200,
//   },
// };

// console.log(bill.customerName);
// console.log(bill.products.productName);

// TYPE INTERSECTION
// allow two or more different types in one type

// type Student = {
//   studentName: string;
//   rollNo: number;
// };

// type Teacher = {
//   teacherName: string;
// };

// type ClassRoom = Teacher & Student;

// let classRoom: ClassRoom = {
//   studentName: "Umair",
//   rollNo: 1234,
//   teacherName: "Ali",
// };

// console.log(classRoom);
// console.log(classRoom.teacherName);

// // Example
// type Emp = {
//   employeeName: string;
//   empexperience: number;
// };

// type mng = {
//   managerName: string;
//   managerexperience: number;
// };

// type Company = Emp & mng;

// let google: Company = {
//   employeeName: "Umair",
//   empexperience: 1,
//   managerName: "Sundar",
//   managerexperience: 10,
// };

// console.log(google);

// INTERFACE
// we only use interface for objects for type assigning  syntax interface YourName {}  (without equals)

interface Employee {
  employeeName: string;
}

interface Manager {
  managerName: string;
}

type Office = Employee & Manager;

let office: Office = {
  employeeName: "Umair",
  managerName: "BOSS",
};
console.log(office);

