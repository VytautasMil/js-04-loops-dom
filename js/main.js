console.log('main.js');

let sum = 0;
// debugger;
for (let i = 0; i < 6; i++) {
  sum += i;
  // console.log(`sis ciklas yra ${i}. bendra suma = ${sum} `);
}
// console.log(`Bendra suma po visko = ${sum} `);
// debugger;
if (sum === 15) {
  console.log('penkiolika');
} else {
  console.log('nepenkiolika');
}

console.group('continue soka tiesiai i i++');
// atspausdinti skaicius nuo 10 iki 20 bet praleisti 15
for (let i = 10; i <= 20; i++) {
  if (i === 15) {
    // debugger;
    // continue soka tiesiai i i++
    // continue;
    break;
  }
  console.log(`skaicius ${i}`);
}
console.groupEnd();