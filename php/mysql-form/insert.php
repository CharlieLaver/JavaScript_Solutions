
<!-- INSERT INTO DATABASE -->

<?php

//includes the database connection as $db variable
include 'db.inc.php';

 $name = '';
 $password = '';
 $gender = '';
 $color = '';

 
 //validation
 
    //if submit btn is set
  if(isset($_POST['submit'])) {
    //$ok to check for empty input     
      $ok = true;

    if(!isset($_POST['name']) || $_POST['name'] === '') {
        $ok = false;
    } else {
        $name = $_POST['name']; 
    }

    if(!isset($_POST['password']) || $_POST['password'] === '') {
        $ok = false;
    } else {
        $password = $_POST['password']; 
    }

    if(!isset($_POST['gender']) || $_POST['gender'] === '') {
        $ok = false;
    } else {
        $gender = $_POST['gender']; 
    }

    if(!isset($_POST['color']) || $_POST['color'] === '') {
        $ok = false;
    } else {
        $color = $_POST['color']; 
    }


    if($ok) {

        //hashes the password for security 
        $hash = password_hash($password, PASSWORD_DEFAULT);

       //creating sql string
       $sql = sprintf(
           //           table      accounts                  placeholders
           "INSERT INTO users (name, gender, color, hash) VALUES ('%s', '%s', '%s', '%s' )",
           //values for placeholders
           $db->real_escape_string($name),
           $db->real_escape_string($gender),
           $db->real_escape_string($color),
           $db->real_escape_string($hash));
            //send to database
           $db->query($sql);
            echo '<p>User added.</p>';
           //close the connection
           $db->close();
       
    }
  
  }

?>


<form action='' method='post'>

    User name: <input type='text' name='name' value='<?php
        echo htmlspecialchars($name, ENT_QUOTES); //prefilling text field
    ?>'><br>

    Password: <input type='password' name='password'><br>

    Gender:
    f
    <input type='radio' name='gender' value='f'<?php
    //prefilling radio btn
        if($gender === 'f') {
            echo ' checked';
        }
    ?>>
    m
    <input type='radio' name='gender' value='m'<?php
        if($gender === 'm') {
            echo ' checked';
        }
    ?>>
    o
    <input type='radio' name='gender' value='o'
    <?php
        if($gender === 'o') {
            echo ' checked';
        }
    ?>><br>
    Favorite color:
    <select name='color'>
        <option value=''>Please Select</option>
        <option value='#f00'<?php
        //prefilling standard list
            if($color === '#f00') {
                echo 'selected';
            }
        ?>>red</option>
        <option value='#0f0'<?php
            if($color === '#0f0') {
                echo 'selected';
            }
        ?>>green</option>
        <option value='#00f'<?php
            if($color === '#00f') {
                echo 'selected';
            }
        ?>>blue</option>
    </select><br>
   
    <input type='submit' name='submit' value='Register'>
</form>
