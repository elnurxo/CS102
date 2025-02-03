// let numbers = [1, 2, 3, 4, 5];
let animals = ["cat", "dog", "cow", "zebra", "dinosaur"];

// console.log(animals.length);
// console.log(animals.toString());
// console.log(animals.at(3)); // animals[3]
// console.log(animals.join('_'));

//pop, push, shift, unshift
// animals.pop(); //remove dinosaur
// animals.push('ant');
// animals.push('squirrel');
// animals.shift(); //remove from first
// animals.unshift('fox');

// delete animals[3];
// let boys = ['john','jack'];
// let girls = ['anna','robin'];
// let kids = boys.concat(girls, ['beck']);
// console.log(kids);
// animals.splice(2, 1); //delete cow
// animals.splice(3, 0, 'monkey');

// const res = animals.toSpliced(2, 1);
// console.log(res);

// const idx = animals.indexOf('zebra', 4);
// console.log(idx); //? - (-1)

// const found = animals.filter((animal) => {
//   return animal.length === 3;
// });

// console.log(found);

// let randomNumbers = [21, 11, 9, 6, 7, 34, 27, 17];

// const sortedNumbers = randomNumbers.sort((num1, num2)=>{
//     return num2 - num1;
// });

// console.log(randomNumbers.reverse());

// const found = randomNumbers.some((num)=>{
//     return num > 0;
// });

// console.log(found);

let students = [
  { fullName: "Catherine Lee", major: "Physics", age: 19, gpa: 78 },
  { fullName: "Bob Smith", major: "Mathematics", age: 22, gpa: 90 },
  { fullName: "David Kim", major: "Chemistry", age: 21, gpa: 88 },
  { fullName: "Isabella Garcia", major: "Art History", age: 19, gpa: 89 },
  { fullName: "Franklin Miller", major: "Economics", age: 20, gpa: 76 },
  { fullName: "Grace Wilson", major: "Philosophy", age: 22, gpa: 81 },
  { fullName: "Alice Johnson", major: "Computer Science", age: 20, gpa: 85 },
  { fullName: "Henry Brown", major: "Engineering", age: 21, gpa: 84 },
  { fullName: "Emily Davis", major: "Biology", age: 23, gpa: 67 },
  { fullName: "Jack Robinson", major: "Political Science", age: 24, gpa: 93 },
];

// const sortByGPA = students.sort((stu1, stu2)=>{
//     return stu2.gpa - stu1.gpa
// });

// const firstExcellent = students.find((student)=>{
//     return student.gpa > 90;
// })

// const allSucceeded = students.every((student)=>{
//     return student.gpa > 50;
// })

// const ageMid20s = students.filter((student) => {
//   return student.age >= 20 && student.age <= 22;
// });

// const sortByName = students.sort((stu1, stu2) => {
//   return stu2.fullName.localeCompare(stu1.fullName);
// });

// console.log(sortByName);
