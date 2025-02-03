//function - repeating code block - reusable
// function calculatePow(x){
//     let pow = x**2;
//     return pow;
// }

// console.log(calculatePow(-1));

//funksiyamiz 4 parameter qebul edir (number)
//ve geriye hemin parameterlerin ededi ortasini qaytarir
// function findAvg(x, y, z, v) {
//     return (x + y + z + v) / 4;
// }

// console.log(findAvg(10,20,30,40));

//conditions
// let num = 0;
// if (num > 0) {
//   console.log("positive");
// }
// else if(num == 0){
//     console.log('number is zero');
// }
// else {
//   console.log("negative");
// }

// let num = -44;

// if(num > 0 && num % 2 == 0){
//     console.log('yes');
// }
// else{
//     console.log('no')
// }

// let weekDay = 1;

// switch (weekDay) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//   case 7:
//     console.log("weekend");
//     break;

//   default:
//     console.warn("invalid day!");
//     break;
// }

//human object -> fullName, age, balance
//movie object -> title, genre, ticketPrice
//ticketQuantity - 2
//logic -> check age, check balance

// function hasAccessToMovie(human, movie, ticketQuantity) {
//   if (human.age > 18) {
//     //age ok - check balance
//     if (human.balance > movie.ticketPrice * ticketQuantity) {
//       human.balance -= movie.ticketPrice * ticketQuantity;
//       console.log("welcome, enjoy the movie!");
//       console.log("current balance is: ", human.balance);
//     } else {
//       console.log("not enough balance!");
//     }
//   } else if (human.age === 18) {
//     let tPrice = movie.ticketPrice / 2;
//     if (human.balance > tPrice * ticketQuantity) {
//       human.balance -= tPrice * ticketQuantity;
//       console.log("welcome, enjoy the movie with 50% discount!");
//       console.log("current balance is: ", human.balance);
//     } else {
//       console.log("not enough balance!");
//     }
//   } else {
//     console.log("does not have access because of age restriction!");
//   }
// }

// const johnDoe = {
//   fullName: "John Doe",
//   age: 18,
//   balance: 50,
// };
// const alien = {
//   title: "Alien",
//   genre: "horror",
//   ticketPrice: 7,
// };

// hasAccessToMovie(johnDoe, alien, 2);

let students = [
  { fullName: "Coshqun Ferzeliyev", grade: 92, age: 22 },
  { fullName: "Leyla Ceferova", grade: 82, age: 27 },
  { fullName: "Feride Bayramova", grade: 95, age: 30 },
  { fullName: "Ferid Allahverdiyev", grade: 98, age: 20 },
];

let isOneExcellent = false;
let counter = 0;
for (let index = 0; index < students.length; index++) {
  if (students[index].grade > 90) {
    isAllExcellent = true;
    counter++;
  }
}
console.log(counter);
console.log(isAllExcellent);

// let numbers = [1, 2, 5, 77, 35, 22, 178, 9];

// //loop
// let sum=0;
// for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index]  ;

// }
// console.log(sum / numbers.length)

function calculateFactorial(num) {
  //loop
  let factorial = 1;
  let index = 1;
  while (index <= num) {
    index++;
    factorial *= index;
  }
  return factorial;
}

console.log(calculateFactorial(3));
//5 => 1*2*3*4*5
