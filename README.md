
# 🎬 Movie Website

A dynamic movie website where users can browse a curated list of movies, view details, and manage their favorite selections.

---

## 📋 Features

- 🎥 **Browse Movies**: Explore a list of movies with posters, titles, and brief descriptions.
- 🔎 **Movie Details**: View more information about each movie, including genre, release date, and synopsis.
- ❤️ **Favorite Management**: Add or remove movies from your favorites list for quick access.

---

## 🚀 Installation

Follow the steps below to set up the project on your local machine:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/FahadQasim283/movie-website.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd movie-website
```

### 3️⃣ Set Up the Database

- Ensure you have a MySQL server running.
- Create a database named `movie_db`.
- Import the `db.php` file to set up the necessary tables.

### 4️⃣ Configure Database Connection

- Open the `db.php` file.
- Update the following credentials to match your local setup:

```php
$host = 'localhost';
$username = 'your_username';
$password = 'your_password';
$database = 'ecinema';
```

### 5️⃣ Start the Server

- Use a local server environment such as **XAMPP** or **WAMP**.
- Place the project folder in the server's root directory (`htdocs` for XAMPP).
- Open your browser and navigate to:

```
http://localhost/movie-website/index.php
```

---

## 📂 Project Structure

```bash
movie-website/
├── css/
│   └── style.css
├── images/
│   └── movie-posters.jpg
├── js/
│   └── script.js
├── index.php
├── db.php
└── README.md
```

---

## 📖 Usage

1. **Home Page**: Displays a list of movies with posters.
2. **Movie Details**: Click on a movie to see more details.
3. **Add to Favorites**: Save movies to your favorites list.
4. **View Favorites**: Navigate to the favorites page to see saved movies.
5. **Remove from Favorites**: Click the "Remove" button to delete a movie from your list.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request for review.

---

## 📄 License

This project is Public no licese required. Make sure credit author by mentioning github while using this project.

---

## 📧 Contact

For inquiries or support, open an issue on the GitHub repository.

---

**⭐️ If you like this project, don't forget to give it a star!** 😊
