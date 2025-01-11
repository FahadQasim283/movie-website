import { moviesData } from "./data.js";

let movies = moviesData.movies;
const startingBannerIndex = 4;
let currentBannerIndex = 0;
const endingBannerIndex = 10;
const ITEMS_PER_ROW = 6;

const genreStates = {
  Action: false,
  Drama: false,
  Comedy: false,
  Crime: false,
  Biography: false,
  History: false,
  Animation: false,
  Adventure: false,
  "Sci-Fi": false,
  Romance: false,
  Family: false,
  Thriller: false,
  Mystery: false,
  War: false,
};

document.addEventListener("DOMContentLoaded", initializeWebsite);

function initializeWebsite() {
  setupBanner();
  setupGenreSections();
  setupEventListeners();
}

function setupBanner() {
  const bannerElement = document.getElementById("movieBanner");
  bannerElement.innerHTML = "";

  movies.slice(startingBannerIndex, endingBannerIndex).forEach((movie, index) => {
    const bannerItem = createBannerItem(movie);
    bannerElement.appendChild(bannerItem);
  });
  updateBannerPosition();
}

function createBannerItem(movie) {
  const div = document.createElement("div");
  div.className = "banner-item";
  div.innerHTML = `
        <img src="${movie.backdrop}" alt="${movie.title}">
        <div class="banner-info">
            <h3>${movie.title}</h3>
            <div class="rating">★ ${movie.imdb_rating.toFixed(1)}</div>
        </div>
    `;
  div.addEventListener("click", () => showMovieDetails(movie));
  return div;
}

function setupGenreSections() {
  setupGenreSection("Action", "actionMovies");
  setupGenreSection("Drama", "dramaMovies");
  setupGenreSection("Comedy", "comedyMovies");
  setupGenreSection("Crime", "crimeMovies");
  setupGenreSection("Biography", "biographyMovies");
  setupGenreSection("History", "historyMovies");
  setupGenreSection("Animation", "animationMovies");
  setupGenreSection("Adventure", "adventureMovies");
  setupGenreSection("Sci-Fi", "sciFiMovies");
  setupGenreSection("Romance", "romanceMovies");
  setupGenreSection("Family", "familyMovies");
  setupGenreSection("Thriller", "thrillerMovies");
  setupGenreSection("Mystery", "mysteryMovies");
  setupGenreSection("War", "warMovies");
}

function setupGenreSection(genre, elementId) {
  const container = document.getElementById(elementId);
  const genreMovies = movies.filter((movie) => movie.genres.includes(genre));

  const moviesToShow = genreStates[genre]
    ? genreMovies
    : genreMovies.slice(0, ITEMS_PER_ROW);

  container.innerHTML = moviesToShow
    .map(
      (movie) => `
            <div class="movie-card" data-id="${movie.id}">
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <div class="rating">★ ${movie.imdb_rating.toFixed(1)}</div>
            </div>
        </div>
    `
    )
    .join("");

  const button = document.querySelector(`button[data-genre="${genre}"]`);
  button.textContent = genreStates[genre] ? "Show Less" : "See More";
  button.classList.toggle("active", genreStates[genre]);

  container.querySelectorAll(".movie-card").forEach((card) => {
    card.addEventListener("click", () => {
      const movieId = card.getAttribute("data-id");
      const selectedMovie = movies.find((movie) => movie.id === movieId);
      showMovieDetails(selectedMovie);
    });
  });
}

function showMovieDetails(movieSelected) {
  const movie = movies.find((m) => m.id == movieSelected.id.toString());
  if (!movie) return;
  const modal = document.getElementById("movieModal");
  const detailsContainer = document.getElementById("movieDetails");

  const releaseYear = new Date(movie.released_on).getFullYear();

  detailsContainer.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
        <div class="movie-details-info">
            <h2>${movie.title} (${releaseYear})</h2>
            <p><strong>Rating:</strong> ★ ${movie.imdb_rating.toFixed(1)}</p>
            <p><strong>Genre:</strong> ${movie.genres.join(", ")}</p>
            <p><strong>Duration:</strong> ${movie.length}</p>
            <p><strong>Release Date:</strong> ${movie.released_on}</p>
            <p><strong>Cast:</strong> ${movie.cast.join(", ")}</p>
            <p><strong>Storyline:</strong> ${movie.overview}</p>
        </div>
    `;

  modal.style.display = "block";
}

function toggleGenreSection(genre) {
  genreStates[genre] = !genreStates[genre];
  const elementId = `${genre.toLowerCase()}Movies`;
  setupGenreSection(genre, elementId);
}

function setupEventListeners() {
  document.querySelector(".prev-btn").addEventListener("click", () => {
    if (currentBannerIndex > 0) {
      currentBannerIndex = currentBannerIndex - 1;
      updateBannerPosition();
    }
    console.log(currentBannerIndex);
  });

  document.querySelector(".next-btn").addEventListener("click", () => {
    currentBannerIndex = currentBannerIndex + 1;
    if (currentBannerIndex >= endingBannerIndex - startingBannerIndex) {
      currentBannerIndex = 0;
    }
    updateBannerPosition();
    console.log(currentBannerIndex);
  });

  document.querySelectorAll(".see-more-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const genre = button.dataset.genre;
      toggleGenreSection(genre);
    });
  });

  document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("movieModal").style.display = "none";
  });

  window.addEventListener("click", (event) => {
    const modal = document.getElementById("movieModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

function updateBannerPosition() {
  const banner = document.getElementById("movieBanner");
  banner.style.transform = `translateX(-${currentBannerIndex * 100}%)`;
}
