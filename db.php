<?php
$servername = "localhost";
$username = "eyh";
$password = "horizon";
$dbname = "eyh";

$conn = new mysqli($servername, $username, $password, $dbname);
try {
    $db = new PDO("mysql:dbname=" . $dbname . ";host=" . $servername, $username, $password );
 }
catch(PDOException $e) {
    echo $e->getMessage();
}
?>
