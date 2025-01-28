const fullNameInput = document.querySelector("#full-name");
const gradeInput = document.querySelector("#grade");
const addForm = document.querySelector("#add-form");
const studentList = document.querySelector(".students");

//event
addForm.addEventListener("submit", function(e){
    e.preventDefault(); //prevent form refresh
    studentList.innerHTML += `<li class="list-group-item">${fullNameInput.value}, ${gradeInput.value}</li>`;
    fullNameInput.value = '';
    gradeInput.value = '';
});