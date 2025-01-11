<?php
require_once 'db.php';
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $id = $conn->real_escape_string($_GET['id']);
    $sql = "INSERT INTO `favourite_movies` (`id`) VALUES ('$id')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true]);
        header('Location: index.php');
    } else {
        echo json_encode(["success" => false, "error" => $conn->error]);
        header('Location: index.php');
    }
}
?>
