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

// function showMovieDetails(movieSelected) {
//   const movie = movies.find((m) => m.id == movieSelected.id.toString());
//   if (!movie) return;
//   const modal = document.getElementById("movieModal");
//   const detailsContainer = document.getElementById("movieDetails");
//   const releaseYear = new Date(movie.released_on).getFullYear();
//   detailsContainer.innerHTML = `
//     <img src="${movie.backdrop}" alt="${movie.title}" class="movie-poster">
//     <div class="movie-details-info">
//         <h2>${movie.title} (${releaseYear})</h2>
//         <p><strong>Rating:</strong> ★ ${movie.imdb_rating.toFixed(1)}</p>
//         <p><strong>Genre:</strong> ${movie.genres.join(", ")}</p>
//         <p><strong>Duration:</strong> ${movie.length}</p>
//         <p><strong>Release Date:</strong> ${movie.released_on}</p>
//         <p><strong>Cast:</strong> ${movie.cast.join(", ")}</p>
//         <p><strong>Storyline:</strong> ${movie.overview}</p>
//         <a id="rem-fav-btn" href="add_to_fav.php?id=${
//           movie.id
//         }">Add to Favorites</a>
//     </div>
//   `;
//   modal.style.display = "block";
//   const closeModalButton = document.getElementById("close-modal-btn");
//   if (closeModalButton) {
//     closeModalButton.addEventListener("click", () => {
//       modal.style.display = "none";
//     });
//   }

//   // Allow closing the modal when clicking outside of it
//   window.addEventListener("click", (event) => {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   });
// }
