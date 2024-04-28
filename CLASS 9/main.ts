let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function add2(a: number, b: number, ...c: number[]) {
  console.log(a + b);
  console.log(c);
  let initial = 0;

  let allSum = c.reduce((total, initial) => total + initial, 0);
  console.log(allSum);
}

add2(1, 2, 2, 3,...c);

