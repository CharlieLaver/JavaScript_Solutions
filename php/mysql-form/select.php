
<ul>
<!-- GET FROM DATABASE -->
<?php

//includes the database connection as $db variable
include 'db.inc.php';

//sql statment = we want everything from users db
$sql = 'SELECT * FROM users';
$result = $db->query($sql);
//result is iterable
foreach($result as $row) {
    //$row is an array
    printf(                     //%s = placeholder
        '<li><span style="color: %s">%s (%s)</span>
        <a href="update.php?id=%s">update</a>
        <a href="delete.php?id=%s">delete</a>
        </li>', 
        //htmlspecialchars = escape special characters
        htmlspecialchars($row['color']), //placeholder 1
        htmlspecialchars($row['name']), //placeholder 2
        htmlspecialchars($row['gender']), //placeholder 3
        htmlspecialchars($row['id']), //placeholder 4
        htmlspecialchars($row['id']), //placeholder 5
    );
}

//close db connection
$db->close();

?>

</ul>