// // Function without Parameter
// const Hello = () => {
//   console.log("Hello from Aroow Function");
// };
// Hello();
// // Function with Parameter
// const Add = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// console.log(Add(2, 5));
// // Arrow Funtion
// let oddOrEven = (num1: number) => {
//   //   const res = `The number ${num1} is  ${num1 % 2 === 0}`;
//   //   return res;
//   if (num1 % 2 == 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// };
// console.log(oddOrEven(300));
// console.log(oddOrEven(21));
// console.log(oddOrEven(16));
// // Arrrow Function in one line
// const Name = () => "Ali";
// const luckynumber = () => 44;
// const IsPakistani = () => true;
// console.log(Name());
// console.log(luckynumber());
// console.log(IsPakistani());
// // Calculator
// const Calc = (digit1: number, digit2: number, operator: string) => {
//   if (operator == "+") {
//     console.log(`the reult is => ${digit1 + digit2}`);
//   }
// };
// Calc(2, 5, "+");
// Local And Global Variable
var PAkarmy = "Pak Army NO Limit"; // Global Variable
var policeStation1 = function () {
    var Branch = "Gulshan"; // Local Variable
    console.log(PAkarmy);
    console.log(Branch);
};
var policeStation2 = function () {
    var Branch = "North Karachi"; // Local Variable
    console.log(PAkarmy);
    console.log(Branch);
};
policeStation1();
policeStation2();
