
<?php

//includes the database connection as $db variable
include 'db.inc.php';

 //start session
session_start();

$message = '';

//if both login inputs are set
if(isset($_POST['name']) && isset($_POST['password'])) {

    //sql statment = get all values from the db users where the name is equal to the name input
    $sql = sprintf("SELECT * FROM users WHERE name='%s'",
            $db->real_escape_string($_POST['name'])); //placeholder

    $result = $db->query($sql);

    /*gives current row as a object
    all db columns are properties of the object */
    $row = $result->fetch_object();

    //check if something is in $row
    if($row != null) {
        //get the hashed password
        $hash = $row->hash;

        //checking if the inputted pwd is = to the $hash pwd in db
        if(password_verify($_POST['password'], $hash)) {
            //user is logged in
            $message = 'Login successful';
            //session variables
            $_SESSION['username'] = $row->name;
            $_SESSION['isAdmin'] = $row->isAdmin;


        } else {
            $message = 'Login failed';
        }
    }

    $db->close();

}

echo $message;

?>

<form method='post' action=''>
    <input type='text' name='name' placeholder='username' />
    <input type='password' name='password' placeholder='password' />
    <input type='submit' value='login' />
</form>