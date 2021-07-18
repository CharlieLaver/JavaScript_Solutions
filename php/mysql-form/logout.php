
<!-- LOG USER OUT -->

<?php
//start session
session_start();

if(isset($_SESSION['username'])) {
    //unset = destroys the specified variables.
    unset($_SESSION['username']);
}

if(isset($_SESSION['isAdmin'])) {
    //unset = destroys the specified variables.
    unset($_SESSION['isAdmin']);
}

echo 'User logged out';

?>