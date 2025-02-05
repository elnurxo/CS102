const employees = [
  { id: 1, name: "Ravan", salary: 4500, department: "IT" },
  { id: 2, name: "Aysel", salary: 5000, department: "HR" },
  { id: 3, name: "Murad", salary: 4200, department: "Finance" },
  { id: 4, name: "Elchin", salary: 4800, department: "Marketing" },
  { id: 5, name: "Leyla", salary: 5500, department: "IT" },
  { id: 6, name: "Kamran", salary: 4700, department: "Sales" },
  { id: 7, name: "Nigar", salary: 5300, department: "HR" },
  { id: 8, name: "Orkhan", salary: 2000, department: "Finance" },
  { id: 9, name: "Sabina", salary: 4900, department: "IT" },
  { id: 10, name: "Tural", salary: 5100, department: "Marketing" },
  { id: 11, name: "Gunel", salary: 5200, department: "Sales" },
];

// //1 - max salary
// const maxSalary = employees.sort((emp1, emp2) => {
//   return emp2.salary - emp1.salary;
// })[0];

// //2 - IT department employees
// const it_department_employees = employees.filter((employee) => {
//   return employee.department == "IT";
// });

// //3 - maashi < 3000
// const filteredEmps = employees.filter((employee) => {
//   return employee.salary < 3000;
// });

// //4 - total salary
// let totalSalary = employees.reduce((prevVal, currentVal) => {
//   return prevVal + currentVal.salary;
// }, 0);

// const increaseSalary_20 = employees.map((employee)=>{
//     employee.salary = employee.salary + employee.salary*20/100;
//     return employee;
// })

// console.log(increaseSalary_20);
