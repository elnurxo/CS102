const API_URL = "https://679f471b24322f8329c33ca4.mockapi.io/api/users";
//get buttons
const getAllUsersButton = document.querySelector("#get-all-users");
const getOneUserButton = document.querySelector("#get-one-user");
const postUserButton = document.querySelector("#post");
const deleteButton = document.querySelector("#delete");
const updateButton = document.querySelector("#update");

//AXIOS - GET ALL, GET ONE (ID), DELETE (ID), POST, UPDATE (ID)
getAllUsersButton.addEventListener("click", function () {
  axios.get(API_URL).then((response) => {
    console.log(response.data);
  });
});

getOneUserButton.addEventListener("click", function () {
  const id = window.prompt("Enter User ID");
  axios
    .get(API_URL + `/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

postUserButton.addEventListener("click", function () {
  const newUser = {
    createdAt: new Date(),
    fullName: "Karim Sadigov",
    username: "Karim",
    password: "karim123",
    role: "client",
    email: "karim@gmail.com",
  };
  axios.post(API_URL, newUser).then((response) => {
    console.log(response);
  });
});

deleteButton.addEventListener("click", function () {
  const id = window.prompt("enter user id to delete");
  axios
    .delete(API_URL + `/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

updateButton.addEventListener("click", function () {
  const id = window.prompt("enter id to update: ");
  axios
    .put(API_URL + `/${id}`, { fullName: "Updated Updatov!" })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("error: ", err);
    });
});
