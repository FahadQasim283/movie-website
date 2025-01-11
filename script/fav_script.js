import { moviesData } from "./data.js";

let movies = moviesData.movies;

// Load favorite movies
function loadFavorites() {
  fetch("get_fav.php")
    .then((response) => response.json())
    .then((ids) => {
      const favoriteMovies = movies.filter((movie) => ids.includes(movie.id));
      const favoriteMoviesContainer =
        document.getElementById("favorite-movies");
      favoriteMoviesContainer.innerHTML = "";

      if (favoriteMovies.length === 0) {
        favoriteMoviesContainer.innerHTML = `<p>No favorite movies found.</p>`;
        return;
      }

      favoriteMovies.forEach((movie) => {
        const favMovieItem = document.createElement("div");
        favMovieItem.classList.add("fav-movie-card");
        favMovieItem.innerHTML = `
          <img src="${
            movie.backdrop
          }" alt="Movie Poster" class="fav-movie-poster">
          <div class="fav-movie-info">
            <h3 class="fav-movie-title">${movie.title}</h3>
            <p class="fav-movie-rating">Rating: <span>${movie.rating}</span></p>
            <p class="fav-movie-genre">Genre: <span>${movie.genres.join(
              ", "
            )}</span></p>
            <p class="fav-movie-time">Duration: <span>${
              movie.duration
            } min</span></p>
          </div>
        `;
        favMovieItem.addEventListener("click", () => {
          window.location.href = `movie_details.html?movie=${JSON.stringify(
            movie
          )}`;
          // return showMovieDetails(movie);
        });

        favoriteMoviesContainer.appendChild(favMovieItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching favorite movies:", error);
    });
}

loadFavorites();