<?php
require_once 'db.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $conn->real_escape_string($_POST['id']);
    $sql = "INSERT INTO `favourite_movies` (`id`) VALUES ('$id')";
    if ($conn->query($sql) === TRUE) {
        header("Location: index.php");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>

<!-- this code needs to be modified -->