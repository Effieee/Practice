// const markMass = 78;
// const johnMass = 95;
// const markHeight = 1.69;
// const johnHeight = 1.88;

// const BMIMark = markMass / markHeight ** 2;
// const BMIJohn = johnMass / johnHeight ** 2;

// // let markHigherBMI = BMIMark > BMIJohn;
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI ${BMIMark} is higher than John's!`);
// } else {
//   console.log(`John's BMI ${BMIJohn} is higher than Mark's!`);
// }
// // else
// // let markHigherBMI = false;

const dolphinsScoreOne = 96;
const dolphinsScoreTwo = 108;
const dolphinsScoreThree = 10;
const koalasScoreOne = 98;
const koalasScoreTwo = 91;
const koalasScoreThree = 110;

const dolphinsAverage =
  (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;
const koalasAverage = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;
console.log(dolphinsAverage, koalasAverage);

// if (dolphinsAverage > koalasAverage) {
//   console.log("Dolphins are the winners!");
// }
// if (dolphinsAverage < koalasAverage) {
//   console.log("The winners today are the Koalas!");
// }
// if (dolphinsAverage === koalasAverage) {
//   console.log("It's a draw, congratulations to both teams!");
// }

let winner = dolphinsAverage > koalasAverage;
let draw = dolphinsAverage === koalasAverage;
let dolphinsWin = dolphinsAverage >= 100;
let koalasWin = koalasAverage >= 100;

if (dolphinsWin && winner) {
  console.log("Dolphins Win!!!");
}
if (koalasWin && !winner) {
  console.log("Koalas Win!!!");
}
if (draw && dolphinsWin && koalasWin) {
  console.log("It is a draw!");
}
if (!dolphinsWin && !koalasWin) {
  console.log("We did not find our winners today...");
}
