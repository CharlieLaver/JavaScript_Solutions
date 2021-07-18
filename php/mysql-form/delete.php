
<!-- DELETE FROM DATABASE -->

<?php

//checking if the user is admin
include 'auth.inc.php';

//includes the database connection as $db variable
include 'db.inc.php';

/* delete.php?id=%s = to use script in link 
   see use in select.php on line 18 */

//if the id field in the db is set
//ctype_digit = is it a digit
if(isset($_GET['id']) && ctype_digit($_GET['id'])) {
    $id = $_GET['id'];
} else {
    //http redirect
    header('Location: select.php');
}

//sql statment = delete from the db users where the id field is = to $id
$sql = "DELETE FROM users WHERE id=$id";
//execute the $sql statement
$db->query($sql);
echo '<p>User deleted</p>'; 

?>