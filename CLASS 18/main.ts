// let isVictory = true;

// function CricketGame() {
//   return new Promise((resolve, rejected) => {
//     if (isVictory) {
//       setTimeout(() => {
//         resolve("We won"), 2000;
//       }, 2000);
//     } else {
//       setTimeout(() => {
//         rejected("Yeh kiya sa kiya ho gaya");
//       }, 1000);
//     }
//   });
// }

// CricketGame()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//     return "Ghar niklo";
//   })
//   .then((res) => {
//     if (res) {
//       console.log(res);
//     }
//   });

// new keyword
// call contructor and make new object

//IT CAN BE CALLED PARENT CLASS OR SUPER CLASS OR BASE CLASS

// class Person {
//   fullName: string;
//   age: number;

//   getDetails(fullName: string) {
//     console.log(fullName);
//   }

//   constructor(fn: string, a: number) {
//     this.fullName = fn;
//     this.age = a;
//   }
// }

// let p1 = new Person("Umair ALi Khan");
// let p2 = new Person("Azhar ALi Khan");
// console.log(p1.fullName.toUpperCase());
// console.log(
//   p2.fullName.charAt(0).toUpperCase() + p2.fullName.slice(1).toLowerCase()
// );

// INHERITNCE
// INHERIT PROPERTIES FROM PARENT CLASS TO CHILD CLASS
// TO AVOID REPITITION OF CODE

// IT IS CALLED CHILD CLASS OR DERIVED CLASS BECAUSE INHERIT PROPERTIES FROM PARENT CLASS

// class Student extends Person {
//   rollNo: string;
//   timing: string;

//   // super is always used when extends is used
//   // super keyword is always used in derived class for calling parent contructor
//   // even when we don't want its properties
//   // super() keywork should be on top in constructor and this must be below super()
//   constructor(fn: string, a: number, r: string, t: string) {
//     super(fn, a);
//     this.rollNo = r;
//     this.timing = t;
//   }
// }

// let s1 = new Student("Umair Ali Khan", 27, "345235", "2-5");

// HOME WORK ===>>>  CREATE EMPLOYEE CLASS AND INHERIT PERSON

// ----------------------------------------------------------------------------------------------------

// ENCAPSULATION

// ACCESS MODIFIER ARE OF THREE TYPES
// PUBLIC -- CAN BE USED ANYWHERE IN CLASS AND PROGRAM -- BY DEFAULT IT IS PUBLIC
// PRIVATE -- CAN BE USED ONLY IN ITS CLASS
// PROTECTED -- CAN BE USED IN ITS CLASS AND DERIVED CLASS

// class Person {
//   // protected is now accessible only in parent and child class
//   // not accessible in instance of class i.e is with new keyword and outside class
//   protected fullName: string;
//   public age: number;
//   private bankbal: number;

//   getDetails(fullName: string) {
//     console.log(fullName);
//   }

//   constructor(fn: string, a: number, bb: number) {
//     this.fullName = fn;
//     this.age = a;
//     this.bankbal = bb;
//   }
// }

// class Student extends Person {
//   rollNo: string;
//   timing: string;

//   constructor(fn: string, a: number, r: string, t: string, bb: number) {
//     super(fn, a, bb);
//     this.rollNo = r;
//     this.timing = t;
//   }
// }

// let p1 = new Person("umair", 27,20000);
// console.log(p1)
// p1.getDetails("ali");

// class Bank {
//   public customerName: string;
//   protected accountNumber: number;
//   private bankBalance: number = 1000;

//   constructor(
//     c: string,
//     an: number
//     // , bb:number
//   ) {
//     this.customerName = c;
//     this.accountNumber = an;
//     // this.bankBalance = bb
//   }

//   get getbankbal() {
//     return this.bankBalance;
//   }

//   set updatebankbalance(cash: number) {
//     this.bankBalance = this.bankBalance + cash;
//   }
// }

// let b = new Bank("umair", 12345);
// // console.log(b)

// console.log(b.getbankbal);
// console.log(b.updatebankbalance = 400);
// console.log(b.getbankbal);

// ASYNC AWAIT
// await always used with async keyword

// let isVictory = false;

// function CricketGame() {
//   return new Promise((resolve, rejected) => {
//     if (isVictory) {
//       setTimeout(() => {
//         resolve("We won"), 2000;
//       }, 2000);
//     } else {
//       setTimeout(() => {
//         rejected("Yeh kiya sa kiya ho gaya");
//       }, 1000);
//     }
//   });
// }

// let result = async () => {
//   try {
//     const res = await CricketGame();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("we will play again");
//   }
// };

// result();

// TUPLES
// fixed no array with sequence of data we used tuples

// const id: [string, number] = ["asa", 23];
// id.push("asas");
// console.log(id);

// ENUM
// enum are pre define values

// type product = string

// let shoes : product = "nike airmax"

// // EXPLICIT CASTING or TYPE ASSERTION OR TYPE ANNOTATION
// let a: undefined;

// let b = a as unknown as number;
// b=3
// console.log(b);

function error(message: string): never {
  throw new Error(message);
}

error("Bad luck");
