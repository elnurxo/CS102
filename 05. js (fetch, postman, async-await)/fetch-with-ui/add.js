const form = document.querySelector("form");
const titleInp = document.querySelector("#title");
const posterInp = document.querySelector("#poster");
const genreInp = document.querySelector("#genre");
const yearInp = document.querySelector("#release-year");
const descInp = document.querySelector("#description");
const imdbInp = document.querySelector("#imdb");
const trendingCheckBox = document.querySelector("#isTrending");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newMovie = {
    title: titleInp.value,
    poster: posterInp.value,
    genre: genreInp.value,
    releaseYear: yearInp.value,
    description: descInp.value,
    imdb: imdbInp.value,
    isTrending: trendingCheckBox.checked,
  };

  // fetch("https://67a1c3ae5bcfff4fabe359c3.mockapi.io/api/movies", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(newMovie),
  // }).then((resp) => {
  //   if (resp.ok) {
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "movie posted successfully!",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     }).then(() => {
  //       window.location.replace(
  //         "http://127.0.0.1:5500/fetch-with-ui/index.html"
  //       );
  //     });
  //   }
  // });

  axios
    .post("https://67a1c3ae5bcfff4fabe359c3.mockapi.io/api/movies", newMovie)
    .then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "movie posted successfully!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.replace(
          "http://127.0.0.1:5500/fetch-with-ui/index.html"
        );
      });
    });
});
