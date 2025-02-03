//variable - dəyişən (let, var, const)

//string
let firstName = "Elnur";
let lastName = "Khalilov";
let address = "Baku, Azerbaijan";
let nationality = "Azerbaijani";
let bio = "hey, there! I am frontend engineer";
let email = "elnur@gmail.com";
let letter = "a"; //char

//number (range) - 1,2,3 ...
// let age = 29;
let price = 2.99;
let quantity = 40;

//bigInt
// let num = 123n;

//boolean - true / false
let isMarried = false; //0
let isInStock = true; //1
// let isAdult = true;

let x = undefined;
let y = null;

//arrays - list
let grades = [58, 95, 78, 68, 91, 67, 89, 45, 67]; //array elements - array length, index (0)
// console.log(grades[grades.length - 1]);

//objects - non-primitive data type
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 34,
  birthDay: new Date("2000/12/12 08:12"),
  isMarried: false,
  hobbies: ["football", "coding"],
  address: {
    city: "Baku",
    country: "Azerbaijan",
    street: "Nizami str.",
  },
}; //empty object

person.height = 1.78;

// console.log(person.hobbies[0]);

// let, var, const

// let product = {
//     //fields
//     name: 'coca-cola',
//     salePrice: 2,
//     costPrice: 0.5,
//     discountPercentage: 10,
//     //methods
//     calculateProfit(){
//         return (this.salePrice -  this.salePrice * this.discountPercentage / 100) - this.costPrice
//     },
//     getInfo(){
//         return `name: ${this.name}, price: ${this.salePrice}`
//     }
// };

// // console.log(product.calculateProfit());
// // console.log(product.getInfo());
// console.log(product.calculateProfit());

//js operators
let num1 = 55;
let num2 = 65;

// let result = num1 > 0 || num2 > 0; //true axtarir

// console.log(!true);

// let age = 17;
// let isAdult = age >= 18 ? true : false; //ternary if operator

// console.log(num1 != num2); //boolean - true

// num1+= 10; //num1 = num1 + 10
// num1-=2;
// num1*=2;
// console.log(num1); //?

// console.log(num1 + num2);
// console.log(num1**3);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(++num1);
// console.log(--num1);

