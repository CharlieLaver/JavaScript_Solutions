
<!-- protects pages from unauthorized access -->

<?php

//start the session
session_start();

//if isAdmin is not set or the session variable is not 1
if(!isset($_SESSION['isAdmin']) || $_SESSION['isAdmin'] != 1) {
    //redirect to Login.php
    header('Location: login.php');
}


?>