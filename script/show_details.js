const urlParams = new URLSearchParams(window.location.search);
const movieData = urlParams.get("movie");
const movie = JSON.parse(movieData);

if (movie) {
    const body = document.body;
    body.style.backgroundImage = `url(${movie.backdrop})`;
    body.style.backgroundOpacity = .5;

  document.getElementById("movie-title-heading").textContent = `${
    movie.title
  } (${new Date(movie.released_on).getFullYear()})`;
  document.getElementById("movie-poster").src = movie.poster;
  document.getElementById("movie-title").textContent = movie.title;
  document.getElementById("movie-rating").textContent =
    movie.imdb_rating.toFixed(1);
  document.getElementById("movie-genre").textContent = movie.genres.join(", ");
  document.getElementById("movie-duration").textContent = movie.length;
  document.getElementById("movie-release-date").textContent = new Date(
    movie.released_on
  ).toLocaleDateString();
  document.getElementById("movie-cast").textContent = movie.cast.join(", ");
  document.getElementById("movie-storyline").textContent = movie.overview;
  document.getElementById("rem-fav-btn").href = `remove_fav.php?id=${movie.id}`;
} else {
  console.log("Movie ID is missing from the URL.");
}
