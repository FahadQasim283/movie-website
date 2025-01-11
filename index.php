<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-CINEMA</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <nav>
        <div class="logo">E-CINEMA</div>
        <div id="fav-movies"><a href="fav_movie_screen.php">Favourite Movies</a></div>
    </nav>

    <div class="banner-container">
        <div class="banner" id="movieBanner">
            <!-- Banner movies will be inserted here by JavaScript -->
        </div>
        <button class="banner-btn prev-btn">&lt;</button>
        <button class="banner-btn next-btn">&gt;</button>
    </div>

    <main>
        <section class="movie-section">
            <div class="section-header">
                <h2>Action Movies</h2>
                <button class="see-more-btn" data-genre="Action">See More</button>
            </div>
            <div class="movie-grid" id="actionMovies">
                <!-- Action movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>Drama Movies</h2>
                <button class="see-more-btn" data-genre="Drama">See More</button>
            </div>
            <div class="movie-grid" id="dramaMovies">
                <!-- Drama movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>Comedy Movies</h2>
                <button class="see-more-btn" data-genre="Comedy">See More</button>
            </div>
            <div class="movie-grid" id="comedyMovies">
                <!-- Comedy movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>Crime Movies</h2>
                <button class="see-more-btn" data-genre="Crime">See More</button>
            </div>
            <div class="movie-grid" id="crimeMovies">
                <!-- Crime movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>Biography Movies</h2>
                <button class="see-more-btn" data-genre="Biography">See More</button>
            </div>
            <div class="movie-grid" id="biographyMovies">
                <!-- Biography movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>History Movies</h2>
                <button class="see-more-btn" data-genre="History">See More</button>
            </div>
            <div class="movie-grid" id="historyMovies">
                <!-- History movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>Animation Movies</h2>
                <button class="see-more-btn" data-genre="Animation">See More</button>
            </div>
            <div class="movie-grid" id="animationMovies">
                <!-- Animation movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>Adventure Movies</h2>
                <button class="see-more-btn" data-genre="Adventure">See More</button>
            </div>
            <div class="movie-grid" id="adventureMovies">
                <!-- Adventure movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>Sci-Fi Movies</h2>
                <button class="see-more-btn" data-genre="Sci-Fi">See More</button>
            </div>
            <div class="movie-grid" id="sciFiMovies">
                <!-- Sci-Fi movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>Romance Movies</h2>
                <button class="see-more-btn" data-genre="Romance">See More</button>
            </div>
            <div class="movie-grid" id="romanceMovies">
                <!-- Romance movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>Family Movies</h2>
                <button class="see-more-btn" data-genre="Family">See More</button>
            </div>
            <div class="movie-grid" id="familyMovies">
                <!-- Family movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>Thriller Movies</h2>
                <button class="see-more-btn" data-genre="Thriller">See More</button>
            </div>
            <div class="movie-grid" id="thrillerMovies">
                <!-- Thriller movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>Mystery Movies</h2>
                <button class="see-more-btn" data-genre="Mystery">See More</button>
            </div>
            <div class="movie-grid" id="mysteryMovies">
                <!-- Mystery movies will be inserted here -->
            </div>
        </section>

        <section class="movie-section">
            <div class="section-header">
                <h2>War Movies</h2>
                <button class="see-more-btn" data-genre="War">See More</button>
            </div>
            <div class="movie-grid" id="warMovies">
    </main>

    <!-- Movie Details Modal -->
    <div id="movieModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div id="movieDetails">
                <!-- Movie details will be inserted here -->
            </div>
        </div>
    </div>

   <script type="module" src="script/script.js"></script>
</body>
</html>