
<!-- UPDATE DATABASE -->

<?php

//includes the database connection as $db variable
include 'db.inc.php';

/* update.php?id=%s = to use script in link 
   see use in select.php on line 17 */

//if the id field in the db is set
//ctype_digit = is it a digit
if(isset($_GET['id']) && ctype_digit($_GET['id'])) {
    $id = $_GET['id'];
} else {
    //http redirect
    header('Location: select.php');
}

 $name = '';
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

       //creating sql string
       $sql = sprintf(
           //sql statment = update the value (e.g. name) with placeholder  
           "UPDATE users SET name='%s', gender='%s', color='%s' WHERE id=%s ",
           //values for placeholders
           $db->real_escape_string($name),
           $db->real_escape_string($gender),
           $db->real_escape_string($color),
           $id);
            //execute the $sql statement
           $db->query($sql);
            echo '<p>DataBase updated.</p>';
           //close the connection
           $db->close();
      
    } else { //if $ok = false as $_POST['submit'] is not set
        //query the db for the data
        $sql = "SELECT * FROM users WHERE id=$id";
        $result = $db->query($sql);
        //filling the varibles with the values stored in the db
        foreach($result as $row) {
            $name = $row['name'];
            $gender = $row['gender'];
            $color = $row['color'];
        }
        $db->close();
    }
  
  }

?>


<form action='' method='post'>

    User name: <input type='text' name='name' value='<?php
        echo htmlspecialchars($name, ENT_QUOTES); //prefilling text field
    ?>'><br>

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
   
    <input type='submit' name='submit' value='Update'>
</form>
