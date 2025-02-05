import users from "./data.js";
const usersList = document.querySelector(".users-list");

window.addEventListener("load", function () {
  renderUserList(users);
});

//search feature
const searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", function (e) {
  const searchQuery = e.target.value.toLowerCase().trim();

  const searchedUsers = users.filter((user) => {
    return user.fullName.toLowerCase().trim().includes(searchQuery);
  });

  renderUserList(searchedUsers);
});

//filter by country
const countrySelectOption = document.querySelector("#country");

countrySelectOption.addEventListener("change", function (e) {
  const selectedCountry = e.target.value;
  const filteredUsers = users.filter((user) => {
    return user.country.toLowerCase() === selectedCountry;
  });
  renderUserList(filteredUsers);
});

//sort by fullName
const sortSelectOption = document.querySelector("#sort");
sortSelectOption.addEventListener("change", function (e) {
  const selectedOption = e.target.value; //a-z, z-a

  if (selectedOption === "a-z") {
    const sortByFullNameAZ = users.sort((user1, user2) => {
      return user1.fullName.localeCompare(user2.fullName);
    });
    renderUserList(sortByFullNameAZ);
  } else {
    //z-a
    const sortByFullNameZA = users.sort((user1, user2) => {
      return user2.fullName.localeCompare(user1.fullName);
    });
    renderUserList(sortByFullNameZA);
  }
});

function renderUserList(arr) {
  usersList.innerHTML = "";
  arr.forEach((user) => {
    usersList.innerHTML += `
               <li class="list-group-item d-flex justify-content-between align-items-center">
                <img style="object-fit: cover;" width="50" height="50" class="rounded-circle" src="${user.imageURL}"
                    alt="${user.fullName}">
                <span><b>${user.fullName}</b>, <i>${user.country}</i></span>
            </li>
            `;
  });
}
