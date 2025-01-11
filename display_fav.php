<?php
require_once 'db.php';
$sql = "SELECT * FROM favourite_movies";
//only 1 column is in table i-e id
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        ?>
        <tr>
            <td><?php echo $row['id']; ?></td>
        </tr>
        <?php
    }
} else {
    echo "<tr><td colspan='6'>No Movies Found</td></tr>";
}
?>