//  // promise function with no parameter

// function inventoryStock() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("It is available");
//     });
//   }, 2000);
// }

// inventoryStock().then((result) => {
//   console.log(result, "You can have it.");
// });

// // promise function with parameter

// function inventoryStock(mat: number) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (mat > 0) {
//         res(`${mat},"It is available"`);
//       } else {
//         res(`${mat},"not available"`);
//       }
//     }, 2000);
//   });
// }

// inventoryStock(10).then((result) => {
//   console.log(result);
// });

// function that accept callbacks are high order functions

// Promise -> resolve -> then
// Promise -> reject -> catch

// const Fn = () => {
//   return new Promise((res, rej) => {
//       console.log(4 * 4);
//     res("I am resolve"); // only first line will return and rest of the lines are ignored
//   });
// };

// Fn().then((result) => {
//   console.log(result);
// });

// const Fn = () => {
//   return new Promise((res, rej) => {
//     rej("I am rejected"); // only first line will return and rest of the lines are ignored
//   });
// };

// Fn()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let isVictory = false;

// let Cricket = () => {
//   return new Promise((res, rej) => {
//     if (isVictory) {
//       res("We have won");
//       //   rej("We lost");
//     } else {
//       rej("We lost");
//       //   res("We have won");
//     }
//   });
// };

// Cricket()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// CHAINING -- adding then statements
// Promise -> resolve -> then -> then
// Promise -> reject -> catch -> then

// let isVictory = false;

// let Cricket = () => {
//   return new Promise((res, rej) => {
//     if (isVictory) {
//       console.log("Match in progress");
//       setTimeout(() => {
//         res("We have won");
//       }, 2000);
//     } else {
//       setTimeout(() => {
//         rej("We lost");
//       }, 2000);
//     }
//   });
// };

// // FOR CHAINING IF WE WANT TO RETURN IN THEN STATEMENT ADD ANOTHER THEN STATEMENT AND CALL IT AND REPEAT IT TO MAKE CHAINING WORK
// // IN CHAINING RETURN IN THEN NEED ANOTHER THEN AFTER THEN FOR RETURNING THEN
// // FOR CHAINING IN CATCH WE USE THEN BECAUSE THEN TOOK RESPONSE AND SHOW TO USERS

// Cricket()
//   .then((result) => {
//     console.log(result);
//     return "Man of the match : Babar Azam"; // will not run that way
//   })
//   .then((result) => {
//     console.log(result); // print return from before then
//     return "Player of the tournament : Shahid Afridi";
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//     return "Captain ko bahar karo";
//   })
//   .then((error) => {
//     console.log("Error-from-catch", error); // // this will always run whether with then or catch
//   });

// FINALLY -- it will always run whether promise return resolve or reject

// let isVictory = true;

// let Cricket = () => {
//   return new Promise((res, rej) => {
//     if (isVictory) {
//       console.log("Match in progress");
//       setTimeout(() => {
//         res("We have won");
//       }, 2000);
//     } else {
//       setTimeout(() => {
//         rej("We lost");
//       }, 2000);
//     }
//   });
// };

// Cricket()
//   .then((result) => {
//     console.log(result);
//     return "Man of the match : Babar Azam"; // will not that way
//   })
//   .then((result) => {
//     console.log(result); // print return from before then
//     return "Player of the tournament : Shahid Afridi";
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//     return "Captain ko bahar karo";
//   })
//   .then((error) => {
//     console.log("Error-from-catch", error); // this will always run whether with then or catch
//   })
//   .finally(() => {
//     console.log("Returning Home"); // this will always run
//   });

// // ASYNC FUNCTION -- await is always use with async for it to work

const Cricket = () => {
  console.log("starting");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("match is in progress");
    }, 3000);
  });
};

// // // if we are not returning in callback function
// async function getResult() {
//   console.log("toss");
//   const res = await Cricket();
//   console.log(res); // if return is used we have to use then chaining technique
//   let result = "we won";
//   console.log(result);
// }
// getResult();

// const data = getResult();
// console.log(data);

// // if we are returning in promise we have to use .then method
async function getResult() {
  const res = await Cricket();
  return res; // if return is used we have to use then chaining technique
}

getResult();

// getResult().then((data) => {
//   //   const data = getResult();
//   console.log(data);
// });

// TRY--CATCH--FINALLY ==> WORK IN ASYNC FUNCTION JUST LIKE THEN AND CATCH
