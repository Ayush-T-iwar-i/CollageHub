<?php



$serve = "localhost";
$username = "root";
$password = "";
$dbname = "nims";

$conn = new mysqli($server, $username, $password, $dbname);

// Check connection
if($conn){
    echo "Successfull";

}else{
    echo "Not Connected";
}
?>