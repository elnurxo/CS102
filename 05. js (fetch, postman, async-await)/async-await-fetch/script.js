//sync
// function getInfo() {
//   return "hey info sync!";
// }

//all async function returns Promise
// async function getInfoAsync() {
//   return "hey info async!";
// }

// const result1 = getInfo();
// const result2 = getInfoAsync();

// console.log(result1);
// console.log(result2);

// const resolvedResult = await result2;
// console.log(resolvedResult);

// result2
//   .then((data) => {
//     console.log(data);
//     return 'next';
//   })
//   .then((x) => {
//     console.log("x: ", x);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promiseObj = new Promise((resolve, reject) => {
//   const value = 15;
//   if (value > 0) {
//     resolve(value); //fulfilled
//   } else {
//     reject(value); //rejected
//   }
// });

// promiseObj
//   .then((x) => {
//     console.log(x); //? - 15
//     return x + 10;
//   })
//   .then((y)=>{
//     console.log(y); //? - 25
//     return y**2;
//   })
//   .then((z)=>{
//     console.log(z);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const serverResult = fetch("https://northwind.vercel.app/api/categories");

// serverResult
//   .then((response) => {
//     console.log("response: ", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//fetch data from json placeholder  - todos
fetch("https://jsonplaceholder.typicode.com/albums", {
    method: 'GET'
})
  .then((response) => {
    return response.json();
  })
  .then((todos) => {
    console.log(todos);
  })
  .catch((err) => {
    console.log(err);
  });
