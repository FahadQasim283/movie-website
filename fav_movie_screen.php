<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/fav_styles.css">
    <title>Favorite Movies</title>
</head>
<body>
    <h1>Your Favorite Movies</h1>
    <table>
        <tr>
            <th>Movie Title</th>
            <th>Poster</th>
            <th>Rating</th>
        </tr>
        <?php
        require_once 'display_fav.php';
        ?>
    </table>
</body>
</html>
