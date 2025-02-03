// let number1 = 55;
// let number2 = 22;

// function getResult(number1, number2) {
//   let result = undefined;
//   if (number1 % 2 == 0 && number2 % 2 == 0) {
//     result = number1 + number2;
//   } else {
//     result = number1 * number2;
//   }

//   console.log("result: ", result);
//   return result;
// }

//BOM - browser object model - window object
// getResult(34,10);

// window.alert('hey message!');
// const age = Number(window.prompt("enter your age: ")); //string
// window.alert(`next year your age will be ${age + 1}`);

// if (window.confirm("do you accept our cookie policy?")) {
//     document.cookie = "username=John Doe";
//     window.alert('continue');
// } else {
//   window.location.replace('https://google.com');
// }
// const checkAge = window.confirm("are you under age?");
// window.alert(checkAge);

// const headingTitle = document.getElementById('title');
// const paragraphs = Array.from(document.getElementsByClassName('content'));
// const inp = Array.from(document.getElementsByTagName('input'));
// console.log(inp);

//querySelector, querySelectorAll
// const title = Array.from(document.querySelectorAll("button"));

// console.log(title);

// const deleteBtn = document.createElement("button");
// deleteBtn.setAttribute("class", true);
// deleteBtn.removeAttribute('disabled');
// console.log(deleteBtn.hasAttribute('disabled'));
// deleteBtn.classList.add('button');
// deleteBtn.style.backgroundColor = 'red';
// deleteBtn.style.color = 'white';
// deleteBtn.style.padding = '12px';
// deleteBtn.textContent = "delete";

// const editBtn = document.createElement("button");
// editBtn.textContent = "edit";

// document.body.append(deleteBtn, editBtn);
// console.log(deleteBtn);

// - - - - - - - - - - - -
const heading = document.createElement("h1");
heading.textContent = "Hello DOM";
heading.classList.add("text-center");

const horizontalLine = document.createElement("hr");
horizontalLine.classList.add("w-50", "mx-auto", "my-3");

//form
// const form = document.createElement('form');
// form.classList.add('mx-auto','w-25','d-flex','flex-column','gap-2');

// const searchInp = document.createElement('input');
// searchInp.classList.add('form-control');
// searchInp.setAttribute('type','text');
// searchInp.setAttribute('placeholder','search user...');
// searchInp.setAttribute('required',true);

// const btn = document.createElement('button');
// btn.setAttribute('type','submit');
// btn.classList.add('btn','btn-primary');
// btn.textContent = 'search';

// form.append(searchInp, btn);

// document.body.append(heading, horizontalLine, form);

//events - load
// window.addEventListener('load', function(){
//     window.alert('hello!');
// });

// document.addEventListener('DOMContentLoaded',function(){
//     window.alert('hello');
// })

const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#search-btn");
const output = document.querySelector("h5");
const form = document.querySelector("form");
const list = document.querySelector(".items");

searchInput.addEventListener("keyup", function () {
  const value = this.value;
  if (value.length > 0) {
    output.textContent = value;
    output.style.color = "black";
    searchButton.removeAttribute("disabled");
  } else {
    searchButton.setAttribute("disabled", true);
    output.textContent = "empty";
    output.style.color = "red";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault(); //form refresh prevent
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.textContent = searchInput.value;
  list.append(listItem);
  searchInput.value = '';
  output.textContent = '...';
});
