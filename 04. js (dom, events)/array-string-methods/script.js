//string methods
let message = "hello js";

// console.log(message.length);
// console.log(message.charAt(0)); //? - h
// console.log(message.charCodeAt(0)); //? - 104
// console.log(message.at(0)); //? - h
// console.log(message[0]); //? - h
// console.log(message.slice(0,3)); //? - hel
// console.log(message.substring(0,3)); //? - hel
// console.log(message.substr(0, 5)) - deprecated
// console.log(message.toUpperCase()); // - HELLO JS
// console.log('HELLO HTML'.toLowerCase()); // hello html
// console.log('java'.concat('script',' programming language')); //javascript
// console.log(' java '.trim()); //? - 4 or 6
// console.log(' java '.trimStart()); //? - 4 or 6
// console.log(' java '.trimEnd()); //? - 4 or 6
// console.log('hello'.padStart(7,'x')); //? - xxhello
// console.log('hello'.padEnd(4,'x')); //? - helloxx
// console.log('hello'.repeat(3)); //? - hellohellohello
// console.log('hello js'.replace('js','javascript')); //? - hello javascript
// console.log('js, hey js'.replaceAll('js','javascript')); //? - javascript hey js
// console.log("js html css".split(" ")); //? - [js, html, css]
// console.log("john,adam,beck,jack".split(','));
// console.log('12345'.split(''));

//STRING SEARCH METHODS
// console.log('hello js'.indexOf('e', 2)); //? - -1
// console.log('hello jes'.lastIndexOf('e')); //? - 7
// console.log('hello js'.search('js'));
// console.log('https://google.com'.startsWith('https'));
// console.log('https://google.com'.endsWith('.az'));
// console.log('john doe'.includes('john'));
// console.log('hello'.match(/[a-zA-Z]+/)); // result value
// const REGEX = /^[a-zA-Z]+$/;
// console.log(REGEX.test('hello5'));

// const carSerialNumber = '10-ON-010';
// const CAR_REGEX = /^(99|10|90|77)-[A-Z]{2}-\d{3}$/;

// console.log(CAR_REGEX.test(carSerialNumber));

// function getFullName(firstName, lastName){
//     return firstName + ' ' + lastName;
// }

// function generateID(fullName, major, age) {
//   //John Doe, IT, 22 => JD_PR_2003
//   const fullNameArray = fullName.split(" ");
//   const birthYear = new Date().getFullYear() - age;
//   const id =
//     fullNameArray[0][0].toUpperCase() +
//     fullNameArray[1][0].toUpperCase() +
//     "_" +
//     major.slice(0, 2).toUpperCase() +
//     "_" +
//     birthYear;

//   return id;
// }

// const id = generateID("Huseyn Abbasov", "Finance", 21); //HA_FI_2004
// console.log(id);
