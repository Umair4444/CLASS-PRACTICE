// FOR LOOPS
// if we want to run a program "x" many times
// FOR LOOPS IS USED WHEN YOU KNOW YPUR ENDING POINT
// starting point
// ending point
// steps to reach ending point
// ; means breaking point
//          start  end     increament
// for (let i = 0; i < 11; i++) {
//   console.log(`2 * ${i} = ${2 * i}`);
// }
// for (let i = 5; i < 16; i++) {
//   console.log(i);
// }
// // i = i+5 or i+=5
// for (let i = 5; i < 26; i+=5) {
//   console.log(i);
// }
// // use greater than in  decreamenting & use less than in  increamenting
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
// // WHILE LOOPS
// // you dont know your number of iteration the user is going to use
// let abc = 1;
// while (abc <= 15) {
//   console.log(abc);
//   abc++;
// }
// let abcd = 1;
// while (abcd <= 20) {
//   console.log(abcd);
//   abcd += 3;
// }
// let fruits = ["Apple", "Banana", "Orange"];
// fruits.push("Mango");
// fruits.unshift("Peach");
// fruits[2] = "watermelon"
// for (let i = 0; i < fruits.length; i++) {
//   // console.log(fruits.length) // tells you lenght of your array
//   console.log(fruits[i]);
// }
// // FOR-OF LOOP
// // only use for arrays
// let vegetable = ["kheera", "began", "kareela", "bhindi"];
// for (let sabzi of vegetable) {
//   console.log(sabzi);
// }
// // print letters seperately
// let mycountry = "PAKISTAN";
// for (let letters of mycountry) {
//   console.log(letters);
// }
// for (let i=0;i<mycountry.length;i++){
//     console.log(mycountry[i])
// }
// // NOT POSSIBLE
// let isPresent = [true]
// for(let i=0;i<4;i++)
//     {
//         console.log(isPresent[i])
//     }
// // print favnumber=45 number 45 times
// let favnumber = 45
// for(let i=0;i<favnumber;i++){
//     console.log(favnumber)
// }
// // ENUM
// // use to print number and string
// // it will print string or number value and index number if no value is given
// enum Direction {
//   North = "NORTH",
//   South = "SOUTH",
//   East = 'EAST',
//   West = "WEST",
// }
// console.log(Direction.North)
// enum trafficlight {
//   green,
//   yellow,
//   red ,
// }
// console.log(trafficlight.red);
// console.log(trafficlight.yellow);
// enum Timeslots {
//   morning = "9 to 12",
//   evening = "2 to 5",
//   latenight = "7 to 10",
// }
// console.log(`${Timeslots.evening}`);
// console.log(Timeslots["morning"]);
// // TUPLE
// type DataBase = [number, string, number];
// let person: DataBase[] = [
//   [45, "Aki", 90000],
//   [20, "King", 700000],
//   [70, "King", 10000000],
// ];
// console.log(person[0][1]);
// // using for-of loop
// for (let emp of person) {
//   console.log(emp);
// //   console.log(emp[0], emp[1], emp[2]);
// }
// // using for loop
// for (let i=0;i<person.length;i++){
//     console.log(person[i])
// }
