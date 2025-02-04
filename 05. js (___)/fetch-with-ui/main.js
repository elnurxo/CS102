const movieCards = document.querySelector(".movies-cards");
const API_URL = "https://67a1c3ae5bcfff4fabe359c3.mockapi.io/api/movies";
const loading = document.querySelector(".loading");

window.addEventListener("load", function () {
  fetch(API_URL)
    .then((response) => {
      return response.json();
    })
    .then((movies) => {
      movies.forEach((movie) => {
        movieCards.innerHTML += `
               <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card">
                    <img style="object-fit: cover;object-position: top center;" height="400"
                        src="${movie.poster}" class="card-img-top" alt="${movie.title}" title="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <h6 class="card-title">${movie.genre}</h6>
                        <p class="card-text">${movie.description}</p>
                        <button data-id="${movie.id}" class="btn btn-outline-danger delete">delete</button>
                    </div>
                </div>
            </div>
            `;
      });

      //delete buttons
      const deleteButtons = Array.from(document.querySelectorAll(".delete"));
      deleteButtons.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", function () {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              //fetch - delete
              const id = this.getAttribute("data-id");
              fetch(
                "https://67a1c3ae5bcfff4fabe359c3.mockapi.io/api/movies" +
                  `/${id}`,
                {
                  method: "DELETE",
                }
              ).then(() => {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                }).then(() => {
                  window.location.reload();
                });
              });
            }
          });
        });
      });
    })
    .finally(() => {
      loading.classList.replace("d-block", "d-none");
    });
});
